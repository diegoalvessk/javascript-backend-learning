const produtos = [
    {
        id: 1,
        nome: "Notebook",
        preco: 2500,
        estoque: 15
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 100,
        estoque: 10
    },
    {
        id: 3,
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

// let estoqueMenor = 0;
// produtos.forEach(produto =>{
//     console.log(`Produto: ${produto.nome} - valor em Estoque: R$ ${produto.preco * produto.estoque}`)
//     if(produto.estoque < 13){
//         estoqueMenor++;
//     }
// })

// const estoqueBaixo = produtos.filter(produto => produto.estoque < 13);
// console.log(estoqueBaixo);
// console.log(`Quantidade de produtos com estoque baixo: ${estoqueBaixo.length}`);

// const valoresEstoque = produtos.map(produto => produto.preco * produto.estoque);
// const nomesProdutos = produtos.map(produto => produto.nome);

// console.log(valoresEstoque);
// console.log(nomesProdutos);

// const produtosFormatados = produtos.map(produto => produto.nome + " - R$ " + produto.preco);
// console.log(produtosFormatados);

// console.log(`Produtos com estoque menor que 13: ${estoqueMenor}`);

let produtoEncontrado = produtos.find(produto => produto.id === 2);

if(!produtoEncontrado) console.log("Produto não encontrado");
else console.log(`Produto encontrado: ${produtoEncontrado.nome}  - R$ ${produtoEncontrado.preco}`);

let produtoEncontrado2 = produtos.find(produto => produto.id === 10);

if(!produtoEncontrado2) console.log("Produto não encontrado");
else console.log(`Produto encontrado: ${produtoEncontrado2.nome}  - R$   ${produtoEncontrado2.preco}`);

const temProdutoSemEstoque = produtos.some(produto => produto.estoque === 0);

console.log(temProdutoSemEstoque);