// Para averiguarmos o resultado do teste vamos utilizar a função Assert
const assert = require('assert');
// O page object responsável pela página de preço médio de veículos
const PageObject = require('../../page-objects/pesquisa-google.po');
// Funcões da biblioteca do Cucumber
const {
    Given,
    When,
    Then,
    setDefaultTimeout
} = require('cucumber');
// Definimos um tempo limite de 30 segundos para a execução dos testes
setDefaultTimeout(30000);
// Criamos uma nova instância do Page Object
const pageObject = new PageObject();
let termoPesquisado;
// Abaixo estão sendo definidos todos os passos dos testes
Given('que estou na página inicial do Google', async () => {
    await pageObject.__init__();
    await pageObject.acessarGoogle();
});
Given('escrevo no campo de pesquisa a palavra {string}', async (termo) => {
    termoPesquisado = termo;
    await pageObject.pesquisarPor(termo);
});
When('clico no botão de pesquisa', async () => {
    await pageObject.clicarNoBotãoPesquisa();
});
Then('devo visualizar uma página com os detalhes sobre a pesquisa', async () => {
    let html = await pageObject.obterHtml();
    await pageObject.fecharDriver();
    assert.equal(html.includes(termoPesquisado), true);
});