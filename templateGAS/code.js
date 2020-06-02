const planilha = SpreadsheetApp.openById('');

function doGet(request) {
    return HtmlService.createTemplateFromFile('index')
        .evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
};

const pastaA = planilha.getSheetByName('confront');

function popularhistorico() {
    pastaA.getDataRange().setNumberFormat("@");
    return pastaA.getDataRange().getValues();
};

/*
function gravarDados(dados) {
    dados.forEach(e => {
        let numerolinha = e.shift();
        if (numerolinha === '-') {
            let dadosgravar = [];
            let nomearquivo;
            if (e[3].substr(0, 4) === 'data') {
                let pronto = Utilities.newBlob(e[3], MimeType.JPEG, 'arquivo');
                arquivo = armazenamento.createFile(pronto);
                nomearquivo = arquivo.getId();
                arquivo.setName(nomearquivo);
            } else {
                nomearquivo = e[3];
            };
            dadosgravar.push(e[0], e[1], usuario, e[2], nomearquivo, e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13]);
            pastaA.appendRow(dadosgravar);
        } else {
            let nomearquivo;
            if (e[3].substr(0, 4) === 'data') {
                let pronto = Utilities.newBlob(e[3], MimeType.JPEG, 'arquivo');
                arquivo = armazenamento.createFile(pronto);
                nomearquivo = arquivo.getId();
                arquivo.setName(nomearquivo);
            } else {
                nomearquivo = e[3];
            };
            pastaA.getRange(`A${numerolinha}`).setValue(e[0]);
            pastaA.getRange(`B${numerolinha}`).setValue(e[1]);
            pastaA.getRange(`C${numerolinha}`).setValue(usuario);
            pastaA.getRange(`D${numerolinha}`).setValue(e[2]);
            pastaA.getRange(`E${numerolinha}`).setValue(nomearquivo);
            pastaA.getRange(`F${numerolinha}`).setValue(e[4]);
            pastaA.getRange(`G${numerolinha}`).setValue(e[5]);
            pastaA.getRange(`H${numerolinha}`).setValue(e[6]);
            pastaA.getRange(`I${numerolinha}`).setValue(e[7]);
            pastaA.getRange(`J${numerolinha}`).setValue(e[8]);
            pastaA.getRange(`K${numerolinha}`).setValue(e[9]);
            pastaA.getRange(`L${numerolinha}`).setValue(e[10]);
            pastaA.getRange(`M${numerolinha}`).setValue(e[11]);
            pastaA.getRange(`N${numerolinha}`).setValue(e[12]);
            pastaA.getRange(`O${numerolinha}`).setValue(e[13]);
        };
    });
};

function apagarLinha(linha) {
    pastaA.deleteRow(linha);
};

function carregarImagem(imgid) {
    if (imgid === '-') {
        let bytes = DriveApp.getFileById('').getBlob().getBytes();
        return Utilities.base64Encode(bytes);
    } else {
        let bytes = DriveApp.getFileById(imgid).getBlob().getBytes();
        return Utilities.base64Encode(bytes);
    };
};
*/