var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 215443 % 5; //resto da divisão

var um = '100' / '2';
console.log(um)

var vazio = "Isso é 100" / 2; // NaN not a number
console.log(isNaN(vazio));

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1)

var incrementoPosterior = 1;
console.log(incrementoPosterior++) //pega o valor e adiciona mais um nele
console.log(incrementoPosterior) // agora imprime o novo valor

var incrementoAnterior = 1;
console.log(++incrementoAnterior) //aumenta um valor e ja imprime ele, direto


var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); //33

var cinco = '5'
console.log(+cinco + 2) //o + na frente força a string a virar um número

var frase = "Isto é um teste";
+frase; // NaN ele nao funciona com caracter
-frase; // Nan


var var1 = 3;
var var2 = 4;
3 == var1;  //os dois == compara somente o operando, ou seja, '3'(string) é == à 3 (numero)
'3' == var1;

4 === 4 // aqui ele compara os operandos e os tipos!

var1 !== '3'; //retorna verdadeiro caso os operandos nao sejam iguais e/ou do mesmo tipo
3 !== '3';


