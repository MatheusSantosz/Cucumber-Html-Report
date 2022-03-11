const report = require('multiple-cucumber-html-reporter');
report.generate({
 jsonDir: './report-config/',
    reportPath: './relatorio/',
    pageTitle: 'Testes e2e',
    reportName: 'Relatório de execução de testes End To End',
    metadata:{
        device: 'local machine',
        browser: {
            name: 'firefox'
        },
        platform: {
            name: 'windows'
        }
    },
 customData: {
        title: 'Run info',
        data: [
            {label: 'Projeto', value: 'TestesAutomatizados'},
            {label: 'Versão', value: '1.0.0'},
            {label: 'Ambiente', value: 'Desenvolvimento'},
            {label: 'Executado em', value: Date() }
        ]
    }
});