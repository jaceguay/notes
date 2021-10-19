# Malha viária

```mermaid
graph LR
A["Tabela denominação"]--->|"Código"|B["Tabela propriedades seção"];
B---|"Código + Seção"|C["Classe de feições (linhas)"];
```

## Classe de feições

Feições espaciais, linhas.

Ligação com Tabela propriedades seção: Código + Seção

Campo   | Descrição
--------|------------------------------------
*Código | Identificador
*Seção  | Composição para identificador único

## Tabela propriedades seção

Detalhe em cada seção.

Ligação com Tabela denominação: Código

Campo                  | Descrição
-----------------------|----------------------------------------------------------------------
*Código                | Identificador
*Seção                 | Composição para identificador único
Elevação ponto inicial | Representação da conectividade tridimencional
Elevação ponto final   | Representação da conectividade tridimencional
Sentido tráfego        | Null(duplo), FT(coindide c/digitalização) e TF(inverso digitalização)
Comprimento            | Propriedade geométrica
Hierarquia             | Classe (Expressa, Arterial, Coletora ou local)
Velocidade             | Limite de velocidade na via
Código loteamento      | Código do loteamento de origem
Nome loteamento        | Nome de identificação no loteamento de origem
Largura                | Largura muro a muro da seção
Pavimentação           | Tipo de pavimentação na faixa de rolamento

## Tabela denominação

Denominação e propriedades únidas em toda a via.

Campo             | Descrição
------------------|----------------------------------------------------
*Código           | Identificador
Logradouro        | Denominação
Tipo              | Categoria (rua, servidão, travessa, avenida ...)
Tipo abreviado    | R., Av., Rod. ...
Prefixo           | Acessório denominação (Vereador, Professor, Doutor)
Prefixo abreviado | Dep., Ver., Dr. ...
Nome abreviado    | R.João T.Pinto, R.Bruno V.da Luz ...
Lei               | Lei/data que dá denominação a via
Código TMI        | Relação com tabela tributária

