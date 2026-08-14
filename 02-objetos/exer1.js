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

// const produto = {
//     nome: "Diego Alves",
//     preco: 190,
//     estoque: 20,
//     categorias: ["Brinquedos", "Roupas", "Eletronicos"]

// }

// console.log(produto.nome);
// console.log(produto.categorias[1]);
// produto.preco = 200;
// produto.disponivel = true;
// console.log(produto);

// // Pegue o mesmo objeto produto e adicione uma propriedade chamada fabricante.

// // Só que fabricante também será um objeto:

// // fabricante
// //    ├── nome
// //    ├── pais
// //    └── anoFundacao

// // Depois faça o programa mostrar somente o país do fabricante.

// produto.fabricante = {
//     nome: "Nike",
//     pais: "Brazil",
//     anoFundacao: 2026
// }

// console.log(produto.fabricante.pais);
// console.log(produto);

// // No seu objeto produto, crie um método chamado:
// // vender
// // Quando executarmos:
// // produto.vender();
// // ele deve diminuir o estoque em 1.
// // Por exemplo, se:
// // estoque: 20
// // depois de:
// // produto.vender();
// // deve ficar:
// // estoque: 19
// // E faça:
// // produto.vender();
// // produto.vender();
// // produto.vender();
// // No final, mostre o estoque no console. Ele deverá estar em 17.

// const produto = {
//     nome: "Diego Alves",
//     preco: 190,
//     estoque: 10,
//     categorias: ["Brinquedos", "Roupas", "Eletronicos"],

//     vender: function(quantidade)  {
//         if(this.estoque >= quantidade){
//             this.estoque = this.estoque - quantidade;
//             console.log("venda Realizada");
//         }else{
//             console.log("Estoque insuficiente");
//         }
//     }
// }

// produto.vender(3);
// console.log(produto.estoque);
// produto.vender(10);
// console.log(produto.estoque);

// Próximo exercício — Carrinho de compras

// Agora vamos juntar objeto + método + parâmetro + if/else + cálculo.
