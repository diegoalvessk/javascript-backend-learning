// Crie um objeto chamado:
// produto

// Ele deve possuir:
// nome
// preco
// estoque
// categorias

// categorias deve ser um array com pelo menos duas categorias.

// Depois:
// Mostre o nome no console.
// Mostre a segunda categoria no console.
// Altere o preço.
// Adicione uma propriedade chamada disponivel.
// Mostre o objeto inteiro no console.

const produto = {
    nome: "Diego Alves",
    preco: 190,
    estoque: 20,
    categorias: ["Brinquedos", "Roupas", "Eletronicos"]
}

console.log(produto.nome);
console.log(produto.categorias[1]);
produto.preco = 200;
produto.disponivel = true;
console.log(produto);

// Pegue o mesmo objeto produto e adicione uma propriedade chamada fabricante.

// Só que fabricante também será um objeto:

// fabricante
//    ├── nome
//    ├── pais
//    └── anoFundacao

// Depois faça o programa mostrar somente o país do fabricante.

produto.fabricante = {
    nome: "Nike",
    pais: "Brazil",
    anoFundacao: 2026
}

console.log(produto.fabricante.pais);
console.log(produto);

