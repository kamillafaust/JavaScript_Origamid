var frase = "Oi, tudo bem?";
console.log(typeof frase); //string

var numero = 28;
console.log(typeof numero); //number

var comida = null;
console.log(typeof comida); //object

var time;
console.log(typeof time); //undefined

var simbolo = Symbol();
console.log(typeof simbolo); //object

var nome = "André";
var sobrenome = "Rafael"
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var idade = 28;

var frase = "O " + nome + " tem " + idade + " anos";
console.log(typeof frase);

var frase1 = "Esse é o \"melhor\" jogo";
console.log(frase1);

var gols = 100;
//var frase2 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);