## ler.js
```js
const fs = require('fs');

//ler conteúdo do diretório e abrir cada arquivo
fs.readdirSync('livros/01').forEach(arquivo => {
    if (arquivo != undefined) {
        let contador = {};
        let titulolivro;
        let palavracounter;
        let palavralida;
        let cabecalhoprep = false;
        let cabecalho = true;
        let rodape = false;
        let codif;
        if (arquivo.search('-0.txt') != -1) {
            codinf = 'utf8';
        } else if (arquivo.search('-8.txt') != -1) {
            codinf = 'latin1';
        } else {
            codinf = 'ascii';
        };
        data = fs.readFileSync(`livros/01/${arquivo}`, codif);
        console.log(`livros/01/${arquivo}`);
        if (data == undefined) {
            console.log('erro leitura no livro')
        } else {
            livrostring = data.toString('utf8');
            livrostring.split(/[\r\n]+/)
                .forEach((linha, numlinha) => {
                    //iniciar após cabeçalho
                    if (linha.toUpperCase().includes('START OF THIS PROJECT GUTENBERG')) {
                        if (linha === undefined) {
                            titulolivro = 'título não encontrado'
                        } else {
                            titulolivro = linha.split('EBOOK ')[1].split(' ***')[0];
                        };
                        cabecalhoprep = true;
                    } else if (linha.toUpperCase().includes('*END*THE SMALL')) {
                        titulolivro = 'título não encontrado'
                    };
                    //ignorar após rodapé
                    if (linha.toUpperCase().includes('END OF THIS PROJECT GUTENBERG')) {
                        rodape = true;
                    };
                    //conteúdo
                    if (cabecalho === false && rodape === false) {
                        linha
                            .toLowerCase()
                            .replace(/[1234567890‘’!“”"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]|(\babout\b|\bacross\b|\bafter\b|\ball\b|\balmost\b|\balso\b|\bam\b|\bamong\b|\ban\b|\band\b|\bany\b|\bare\b|\bas\b|\bat\b|\bbe\b|\bbecause\b|\bbeen\b|\bbut\b|\bby\b|\bcan\b|\bcannot\b|\bcould\b|\bdear\b|\bdid\b|\bdo\b|\bdoes\b|\beither\b|\belse\b|\bever\b|\bevery\b|\bfor\b|\bfrom\b|\bget\b|\bgot\b|\bhad\b|\bhas\b|\bhave\b|\bhe\b|\bher\b|\bhers\b|\bhim\b|\bhis\b|\bhow\b|\bhowever\b|\bi\b|\bif\b|\bin\b|\binto\b|\bis\b|\bit\b|\bits\b|\bjust\b|\bleast\b|\blet\b|\blike\b|\blikely\b|\bmay\b|\bme\b|\bmight\b|\bmost\b|\bmust\b|\bmy\b|\bneither\b|\bno\b|\bnor\b|\bnot\b|\bof\b|\boff\b|\boften\b|\bon\b|\bonly\b|\bor\b|\bother\b|\bour\b|\bown\b|\brather\b|\bsaid\b|\bsay\b|\bsays\b|\bshe\b|\bshould\b|\bsince\b|\bso\b|\bsome\b|\bthan\b|\bthat\b|\bthe\b|\btheir\b|\bthem\b|\bthen\b|\bthere\b|\bthese\b|\bthey\b|\bthis\b|\btis\b|\bto\b|\btoo\b|\btwas\b|\bus\b|\bwants\b|\bwas\b|\bwe\b|\bwere\b|\bwhat\b|\bwhen\b|\bwhere\b|\bwhich\b|\bwhile\b|\bwho\b|\bwhom\b|\bwhy\b|\bwill\b|\bwith\b|\bwould\b|\byet\b|\byou\b|\byour\b|\bll\b|\bre\b)/g, '')
                            .split(' ')
                            .forEach(palavra => {
                                if (palavra.length > 1) {
                                    //criar pasta, dois primeiros caracteres de cada palavra
                                    if (!fs.access(`palavras/${palavra.substring(0, 2)}`)) {
                                        fs.mkdirSync(`palavras/${palavra.substring(0, 2)}`);
                                    };
                                    //arquivo com a palavra já existe
                                    if (fs.access(`palavras/${palavra.substring(0, 2)}/${palavra}.json`)) {
                                        palavralida = JSON.parse(fs.readFileSync(`palavras/${palavra.substring(0, 2)}/${palavra}.json`, 'utf8'));
                                        palavralida['cont'] += 1;
                                        let livroindex = palavralida.livros.findIndex(x => x.arquivo == arquivo);
                                        if (livroindex == -1) {
                                            palavralida.livros.push({
                                                'arquivo': arquivo,
                                                'titulo': titulolivro,
                                                'ocorrenexistsSynccias': + 1,
                                                'linhas': [numlinha]
                                            });
                                        } else {
                                            palavralida.livros[livroindex].ocorrencias += 1;
                                            palavralida.livros[livroindex].linhas.push(numlinha);
                                        };
                                        fs.writeFileSync(`palavras/${palavra.substring(0, 2)}/${palavra}.json`, JSON.stringify(palavralida));
                                        if (contador[palavra] === undefined) {
                                            contador[palavra] = +1;
                                        } else {
                                            contador[palavra] += 1;
                                        };
                                    } /*nova palavra*/else {
                                        palavracounter = {
                                            'livros': [
                                                {
                                                    'arquivo': arquivo,
                                                    'titulo': titulolivro,
                                                    'ocorrencias': + 1,
                                                    'linhas': [numlinha]
                                                }
                                            ],
                                            'cont': +1
                                        };
                                        fs.writeFileSync(`palavras/${palavra.substring(0, 2)}/${palavra}.json`, JSON.stringify(palavracounter));
                                        contador[palavra] = +1;
                                    };
                                };
                            });
                    };
                    //ingnorar cabeçalho
                    if (cabecalhoprep === true) {
                        cabecalho = false;
                    };
                });
        }
    };
});
```

## Exemplo livros
```js
//localização ma/macho.json
{
    "livros": [
        {
            "arquivo": "1365.txt",
            "titulo": "COMPLETE WORKS OF LONGFELLOW",
            "ocorrencias": 1,
            "linhas": [
                15937
            ]
        },
        {
            "arquivo": "2000-8.txt",
            "titulo": "DON QUIJOTE",
            "ocorrencias": 11,
            "linhas": [
                18995,
                18996,
                19104,
                20865,
                20869,
                20876,
                20982,
                24951,
                29243,
                29996,
                30770
            ]
        }
    ],
    "cont": 12 //contagem geral do número de ocorrências do livro
}
```

## Página de pesquisa
```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Ativ.1</title>
    <link rel="stylesheet" href="lib/tabulator_simple.min.css" />
    <script src="lib/jquery-3.4.1.min.js"></script>
    <script src="lib/tabulator.min.js"></script>
</head>

<style>
    :root {
        --base: #949494;
        --escuro: #333;
        --claro: #ffffff;
    }

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 10;
        font-family: Arial, Helvetica, sans-serif;
    }

    .conteinerA {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-height: 100%;
        background-color: var(--claro);
    }

    #pesquisa {
        background-color: var(--base);
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex: 1;
        flex-direction: column;
    }

    #total {
        justify-content: right;
    }

    #linhas {
        height: 70px;
    }

    .conteinerB {
        flex: 9;
    }

    .tabulator {
        font-size: 12px;
        background: var(--claro);
    }

    .tabulator .tabulator-header .tabulator-col {
        background: var(--base);
        color: var(--claro);
        text-shadow: 1px 1px 2px black;
    }

    .tabulator .tabulator-header {
        border-bottom: 0px;
    }
</style>

<body>
    <div class='conteinerA'>
        <div id='pesquisa'>
            <form>
                <input type="text" id="pesquisaenter">
            </form>
            <div id=total>__</div>
        </div>
        <div class='conteinerB'>
            <div id='tabelapalavra'>palavra, relação livros</div>
            <div id='tabelalivros'>livros linhas</div>
        </div>
    </div>

    <script>
        let tabelapalavra = new Tabulator('#tabelapalavra', {
            height: '400px',
            layout: 'fitColumns',
            initialSort: [
                { column: "ocorrencias", dir: "desc" },
            ],
            columns: [
                {
                    title: 'Nome do livro',
                    field: 'titulo',
                    width: 460
                }, {
                    title: 'ocor.',
                    field: 'ocorrencias',
                    width: 70
                },
                {
                    title: 'Linhas',
                    field: 'linhas',
                    width: 180
                }
            ],
            rowClick: (e, row) => {
                let arquivo = $.get(`livros/${row._row.data.arquivo}`, function (data) {
                    new Promise((resolve, reject) => {
                        tabelaprep = [];
                        data.split(/[\r\n]+/)
                            .forEach((linha, numlinha) => {
                                if (row._row.data.linhas.indexOf(numlinha) != -1) {
                                    tabelaprep.push({
                                        nlinha: numlinha,
                                        conteudo: linha
                                    });
                                };
                            });
                        resolve(tabelaprep);
                    }).then(() => {
                        let tabelaL = tabelaprep.map((feicoes) => {
                            return {
                                'nlinha': feicoes.nlinha,
                                'conteudo': feicoes.conteudo
                            }
                        });
                        tabelalivro.setData(tabelaL);
                    });
                }, 'text');
            }
        });

        let tabelalivro = new Tabulator('#tabelalivros', {
            height: '400px',
            layout: 'fitColumns',
            columns: [
                {
                    title: 'nº linha',
                    field: 'nlinha',
                    width: 90
                }, {
                    title: 'conteúdo',
                    field: 'conteudo',
                    width: 620
                }

            ]
        });

        $('#pesquisaenter').keydown((e) => {
            if (e.which == 13) {
                let palavra = $('#pesquisaenter').val();
                $.getJSON(`palavras/${palavra.substring(0, 2)}/${palavra}.json`, (data) => {
                    console.log(JSON.stringify(data, undefined, 2));
                    let tabelaP = data.livros.map((feicoes) => {
                        return {
                            'arquivo': feicoes.arquivo,
                            'titulo': feicoes.titulo,
                            'ocorrencias': feicoes.ocorrencias,
                            'linhas': feicoes.linhas
                        }
                    });
                    tabelapalavra.setData(tabelaP);
                    document.getElementById("total").innerHTML = `total: ${data.cont}`;
                }).fail(function () {
                    tabelapalavra.setData([]);
                    tabelalivro.setData([]);
                    document.getElementById("total").innerHTML = `não encontrado`;
                });
                return false;
            };
        });
    </script>
</body>

</html>
```

## mapa de palavras
```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Ativ.1 mapa</title>
    <!-- Load d3.js -->
    <script src="https://d3js.org/d3.v4.js"></script>
    <!-- Load d3-cloud -->
    <script src="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/d3.layout.cloud.js"></script>
</head>

<body>
    <div id="my_dataviz"></div>

    <script>

        // List of words
        let myWords = [
            { size: "2286152", word: "one" },
            { size: "1593205", word: "out" },
            { size: "1498014", word: "up" },
            { size: "1413999", word: "more" },
            { size: "1405851", word: "man" },
            { size: "1353343", word: "now" },
            { size: "1157649", word: "time" },
            { size: "1147437", word: "very" },
            { size: "1120206", word: "upon" },
            { size: "1070121", word: "little" },
            { size: "1042683", word: "see" },
            { size: "967832", word: "know" },
            { size: "965161", word: "before" },
            { size: "964477", word: "made" },
            { size: "963776", word: "shall" },
            { size: "950339", word: "two" },
            { size: "934814", word: "well" },
            { size: "934231", word: "over" },
            { size: "929242", word: "great" },
            { size: "915512", word: "such" },
            { size: "905627", word: "come" },
            { size: "904847", word: "down" },
            { size: "900692", word: "good" },
            { size: "874686", word: "men" },
            { size: "861325", word: "day" },
            { size: "835631", word: "never" },
            { size: "829211", word: "old" },
            { size: "828942", word: "first" },
            { size: "823593", word: "came" },
            { size: "822750", word: "go" },
            { size: "817896", word: "de" },
            { size: "814001", word: "much" },
            { size: "795463", word: "here" },
            { size: "782461", word: "himself" },
            { size: "762137", word: "way" },
            { size: "756222", word: "those" },
            { size: "748932", word: "again" },
            { size: "725093", word: "life" },
            { size: "708696", word: "back" }
        ]

        // set the dimensions and margins of the graph
        let margin = { top: 10, right: 10, bottom: 10, left: 10 },
            width = 800 - margin.left - margin.right,
            height = 800 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        let svg = d3.select("#my_dataviz").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
        // Wordcloud features that are different from one word to the other must be here
        let layout = d3.layout.cloud()
            .size([width, height])
            .words(myWords.map(function (d) { return { text: d.word, size: d.size }; }))
            .padding(1)        //space between words
            .rotate(function () { return ~~(Math.random() * 2) * 90; })
            .fontSize(function (d) { return d.size / 15000; })      // font size of words
            .on("end", draw);
        layout.start();

        // This function takes the output of 'layout' above and draw the words
        // Wordcloud features that are THE SAME from one word to the other can be here
        function draw(words) {
            svg
                .append("g")
                .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function (d) { return d.size; })
                .style("fill", "#69b3a2")
                .attr("text-anchor", "middle")
                .style("font-family", "Impact")
                .attr("transform", function (d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function (d) { return d.text; });
        }
    </script>
</body>

</html>
```
