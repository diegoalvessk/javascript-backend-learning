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

// let quantidadeTotal = 0;
// for (const produto of produtos) {
//     console.log(`${produto.nome} custa ${produto.preco} e possui ${produto.estoque} unidades.`)
//     quantidadeTotal = quantidadeTotal + (produto.estoque * produto.preco);
// }

// console.log(`Valor total do estoque: ${quantidadeTotal}`);

let quantidadeTotal = 0;
produtos.forEach(function(produto){
    console.log(`${produto.nome} custa ${produto.preco} e possui ${produto.estoque} unidades.`)
    quantidadeTotal = quantidadeTotal + (produto.estoque * produto.preco);
})

console.log(`Valor total do estoque: ${quantidadeTotal}`);