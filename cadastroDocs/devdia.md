## 2020-06-01

```let selecaoMapa;``` recebe o último lote ou via selecionados:

```javascript
selecaoMapa = {
    tipo: "via/lote",
    cod: "cod/inscrlig"
}
```

## 2020-06-02

Inseridas as coordenadas do clique na seleção atual:

```js
selecaoMapa = {
    coord: `${e.latlng.lat},${e.latlng.lng}`,
    tipo: 'lote',
    cod: e.target.feature.properties.inscrlig
};
```

Tabela e interações

```mermaid
graph LR
    A[célula] --> B[Lclick]
    B --- C[edição normal]
    A --> D[Rclick]
    D --- E[captura seleção do mapa]
    E --> F[lote (circular pelos códigos)]
    E --> G[via]
```

Elementos:

```[nprotocolo, dataprotocolo, inscrlig, inscricao, codcadastro, endrua, endnumero, endbairro, oeste, leste, norte, sul, dataext, ass, asscargo]```