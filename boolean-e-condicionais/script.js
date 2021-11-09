//Verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado coloque no console "É maior", "É igual" ou "É menor"

var idade = 28;
    idadeParente = 29;

if(idadeParente < idade) {
  console.log("É menor")
} else if(idadeParente === idade) {
  console.log("É igual");
} else {
  console.log("É maior");
}

//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // retorna o ultimo true
console.log(expressao);

//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - 'oi') && (5 - 2); // retorna o falso
console.log(expressao);


//Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "André";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log("Brasil tem mais habitantes");
} else if (brasil === china) {
  console.log("Brasil e China têm a mesma quantidade de habitantes")
} else {
  console.log("China tem mais habitantes que o Brasil");
}

//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

