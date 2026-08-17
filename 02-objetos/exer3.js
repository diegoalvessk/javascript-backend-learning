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

console.log(produtos[0].nome);
console.log(produtos[1].preco);
console.log(produtos[2].estoque);
produtos[0].preco = 2000;
produtos[1].estoque--;
console.log(produtos);
