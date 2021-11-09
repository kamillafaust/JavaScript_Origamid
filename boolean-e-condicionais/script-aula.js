var possuiFaculdade = true;

if(possuiFaculdade) {
  console.log("É verdadeiro");
} else {
  console.log("É falso");
}
//---------

var possuiDoutorado = false;
var possuiGraduacao = true;

if(possuiGraduacao){
  console.log("Possui graduação.")
} else if (possuiDoutorado) {
  console.log("Possui doutorado");
} else {
  console.log("Não possui nada.")
}

//--------

var possuiFacul = false;
var possuiEscolaridade = true;

if(possuiFacul) {
  console.log("Possui facul e escolaridade.");
} else if(possuiEscolaridade) {
  console.log("Possui escolaridade, mas não facul.")
} else {
  console.log("Não possui nada.")
}

//FALSES 

if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

//exemplo:
var nome = ""; //falso
if(nome) {
  console.log("Nome existe");
} else {
  console.log("Nome não existe");
}

var nome2 = 5 - 5; //0
if(nome) {
  console.log("Nome existe");
} else {
  console.log("Nome não existe");
}

//TRUE

if(true)
if(1)
if(" ") //com espaço
if("André")
if(-5)
if({}); //um objeto vazio é verdadeiro

//DICA
//Para verificar se uma variável é true ou false, colocar o !! na frente para verificação
//ou seja:
if(!!" "); // true
if(!!""); // false
if(!!0); // false
if(!!'ahuahs'); //true

//-----------&&-------------
//Se ambos os valores forem true, ele irá retornar o último valor
//verificado. Se algum valor for false, ele irá retorar o mesmo e não irá
//continuar a verificar os próximos

true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false ; //false
(5 >= 5) && (3 < 6);//true
 
if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//-------------||-----------
//Retorna o primeiro valor true que encontrar

true || true; //true
true || false; //true
false || true; //true
'Gato' || false; //Gato
(5 >= 5) || (3 < 6); //true

var condicional = (5 - 5) || (5 + 5) || (10 - 2)
console.log(condicional); // retornou o primeiro verdadeiro -- ||

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2)
console.log(condicional2); // retornou o último verdadeiro, pq é assim com && -- &&

//SWITCH -------------------------------------

var corFavorita = "Amarelo";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;

  case "Amarelo":
    console.log("Olhe para os girassóis");
    break;
  case "Vermelho":
    console.log("Olhe para as rosas");
    break;
  default: //tipo um else, caso n for nenhuma
      console.log("Feche os olhos")
}


