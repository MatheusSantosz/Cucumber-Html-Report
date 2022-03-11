const {
  Builder,
  By    
} = require('selenium-webdriver');
module.exports = function () {
  let driver;
  this.__init__ = async () =>
      driver = await new Builder().forBrowser('firefox').build();

  this.fecharDriver = async () =>
      await driver.quit();

  this.acessarGoogle = async () => {
      await driver.get('https://google.com/');
  };
  this.pesquisarPor = async (termo) => {
      await driver.sleep(1000);
      await driver.findElement(By.name('q')).sendKeys(termo);
  };
  this.clicarNoBotãoPesquisa = async () => {
      await driver.sleep(1000);
      await driver.findElement(By.name('btnK')).click();
  };
  this.obterHtml = async () => {
      await driver.sleep(1000);
      return await driver.findElement(By.id('res')).getAttribute('innerHTML');
  };
};