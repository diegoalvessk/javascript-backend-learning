const produtos = [
    {
        nome: "Notebook",
        preco: 2500,
        estoque: 15
    },
    {
        nome: "Mouse",
        preco: 100,
        estoque: 10
    },
    {
        nome: "Teclado",
        preco: 200,
        estoque: 12
    }
];

let quantidadeTotal = 0;
for (let index = 0; index < produtos.length; index++) {
    console.log(produtos[index].nome);
    console.log(produtos[index].preco);
    quantidadeTotal = quantidadeTotal + produtos[index].estoque;
}

console.log(quantidadeTotal);