'use strict' //faz com q o js entre no modo estrito dele, impede que erros bobos 
//aconteçam, ou seja
//se a variavel carro da linha 5 não tiver um (var/let/const), ele mostrará um erro

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(mostrarCarro);
}

mostrarCarro();  //Fusca no console
console.log(carro); //Erro, carro is not defined, ele nao consegue ver as
//variável que existem dentro da função
//Se a variável carro da linha 5 nao tivesse (var/let/const), ela seria
//acessada, mas é um erro


//---------------------------------------------------------------------------

//const :
//Mantém o escopo no bloco, impede a redeclaração
//e impede a modificação do valor da variável, evitando bugs no código

const mes = 'Dezembro';
mes = 'Janeiro'; //erro, tentou modificar o valor
const semana; //erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2019,
}

data.dia = 29; //Funciona nos atributos do objeto
data = 'Janeiro' //erro ao mudar o objeto

//------------------------------------------------------------------------

//let:

//Mantem o escopo no bloco, impede a redeclaração, mas permite a modificação
//do valor da variável

let ano;
ano = 2021;
ano ++;
console.log(ano); //2022

let ano = 2024; // erro, redeclarou a variável