Endereço:

(prévia)[https://arcgis.itajai.sc.gov.br/portal/apps/webappviewer/index.html?id=dba916cd3969414991ea4ab185c2286d]

Estou considerando esta configuração da planta cadastral para o uso interno, em um usuário que possuí permissão a visualizar todos os itens disponíveis.

- ferramentas
- camadas
- layout/interface
- estilos
- performance

## Ferramentas

### Botões

- Sugestão para o botão 'Casa' centralizar na área urbana com escala 4x maior.

- A ferramenta coordenadas, no canto inferior esquerdo, poderia também exibir as coordenadas em sirgas, é o formato solicitado nos documentos encaminhados à prefeitura.

- Na ferramenta filtro, as interações com os filtros não retornam nada se a camada específica não está ativa, possibilidade da ferramenta filtro e camadas estejam combindas (melhor pois cada janela aberta sobre o mapa dificulta mais a visualização do mesmo, as janelas camada e filtro ao mesmo tempo sobrepõe quase todo o mapa), se não ao menos quando um filtro for selecionados que a camada a qual ele se relaciona seja ligada automaticamente.

- A respeito da organização das janelas, a possibilidade de dedicar uma barra lateral para que elas sejam organizadas, como na ferramenta 'tabela de atributos' que se organiza na parte inferior da tela. Com duas janelas a visualização do mapa fica comprometida. 2 janelas: ![2 janelas](imgs/janelas2.png) e 3 janelas: ![3 janelas](imgs/janelas3.png).

- A ferramenta tabela de atributos poderia assumir o papel da ferramenta filtros combinada com a ferramenta camadas, reduzindo o número de janelas de ferramentas que precisam permanecer flutuantes durante o uso, existe a possiblidade de adicionar um filtro em algumas colunas? Por exemplo: ![filtro coluna](imgs/filtro_coluna_b.png)

- O minimapa fica de um tamanho exagerado quando se utiliza a opção de ampliação, poderia apenas duplicar o tamanho. ![minimapa zoom](imgs/minimapa.png)

- A ferramenta Exibição poderia ser renomeada para Relatório, acredito que torna mais clara sua função.

### Pesquisa

- Pesquisa por via ex. 'josé -> enter', retornou 'José, Mineiros, Goiás,BRA'. Remoção dos itens fora de Itajaí como possíveis resultados da pesquisa, ao menos por padrão, como sugestão utilizar o endereço (nome da rua e n˚).

- A respeito das localizações a serem utilizadas na barra de pesquisa, como sugestão poderiam ser estes 4 itens: Sistema viário (autocompletar), endereço (nome rua, n˚), inscrição imobiliária (setor.quadra.face.lote) e por fim o código do cadastro.

- Indicador de progressão está com um probela de alinhamento: ![indicador_pesquisa](imgs/pesquisa_indicador.gif)

## Camadas

lotes, áreas conflito, edificações, loteamentos

### características dos lotes

propriedade             | fonte      | tipo
------------------------|------------|---------
inscrição imobiliária   | TMI/planta | texto
inscr. imob. anterior   | TMI        | texto
logradouro              | TMI        | texto
lado                    | TMI        | texto
número                  | TMI        | numérico
área terreno            | TMI        | numérico
medida frente           | TMI        | numérico
medida fundos           | TMI        | numérico
área construída         | TMI        | numérico
área preservação        | TMI        | numérico
patrimônio              | TMI        | classe
imóvel rural            | TMI        | classe
número INCRA            | TMI        | numérico
coleta de lixo          | TMI        | classe
limpeza pública         | TMI        | classe
iluminação pública      | TMI        | classe
situação lote           | TMI        | classe
benfeitoria             | TMI        | classe
topografia              | TMI        | classe
piscina                 | TMI        | classe
sauna                   | TMI        | classe
academia                | TMI        | classe
salão de festas         | TMI        | classe
playground              | TMI        | classe
área esportiva          | TMI        | classe
salão de jogos          | TMI        | classe
pavimentação logradouro | planta     | classe
largura via             | planta     | numérico
pavimentação passeio    | planta     | classe
largura passeio         | planta     | numérico

### características das unidades

propriedade             | fonte      | tipo
--- | --- | ---