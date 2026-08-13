//aula de varivaveis
// let nome = "Diego"
// let idade = 22
// let cidade = "Ipatinga"
// let altura = 1.82
// let study = true

// console.log(`Meu nome é: ${nome}`);
// console.log(`Tenho ${idade} anos`);
// console.log(`Moro em ${cidade}`);
// console.log(`Tenho ${altura}m de altura`);

//exercicio 1

let produto = "teclado";
let preco = 150;
let qntd = 2;

// console.log(`Produto: ${produto}`);
// console.log(`Preço ${preco}`);
// console.log(`Quantidade ${qntd}`)
// console.log(`Total: ${qntd * preco}`)

// function calcularTotal(preco, quantidade){
//     return preco * quantidade;
// }

// console.log(calcularTotal(200, 2));
let desconto = 0;
let produto = "teclado";
let preco = 150;
let qntd = 2;

function calcularDesconto(preco, desconto){
    return (preco - ((preco/100) * desconto));
}

console.log(calcularDesconto(200, 10));