//EXERCICIOS ------------------------------------------------------------------

//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

//Crie duas expressões que retornem NaN
var frase = "Isso é um teste" / 2; //qualquer operador que não seja a soma
console.log(frase);

var caracter = "Oie"
console.log(+caracter + 2);

//Somar a string '200' com o número 50 e retornar 250

var numero1 = '200';
var numero2 = 50;
var soma = +numero1 + numero2;
console.log(soma)
//OU
var soma = +'200' + 50;
console.log(soma);

//Incrementar o número 5 e retorne o seu valor incrementado

var incrementa = 5;
console.log(++incrementa);


//Como dividir o peso por 2?

var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; //80kg
var pesoFinal = numero / 2 + unidade;
console.log(pesoFinal);
//OU
var numero = +'80' / 2;
var unidade = 'kg';
console.log(numero + unidade);

