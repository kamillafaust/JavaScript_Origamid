function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(5));

//----------------------------------------
function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

//-----------------------------------------
function imc(peso, altura) { //peso e altura são os parâmetros de uma função
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(63, 1.5));
imc(80, 1.80) //o 80 e o 1.80 são argumentos de uma função

//----------------------------------------
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'amarelo') {
    return 'Eu gosto de girassol';
  } else {
    return 'Eu não gosto de cores';
  }
}
console.log(corFavorita('amarelo'));

//------------------------------------------------
addEventListener('click', function() {
  console.log('Clicou');
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Funções anônimas são aquelas em que o nome da função
//não é definido, escritas como 
//function() {} ou () => {}

//----------------------------------------------------
function mostraConsole() {
  console.log('Oi');
}

addEventListener('click', mostraConsole);

//----------------------------------------------------
function imc2(peso, altura) {
  const imc = peso / (altura ** 2); //expoente
  console.log(imc);
}

imc2(20, 1.80); // undefined
console.log(imc2(80, 1.80)); //retorna o imc e undefinid, pq nao foi definido o retorno

//----------------------------------------------------
function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== 'number') {
    return 'Por favor, preencha um número'; //bateu no return, volta e cancela o resto da função
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('60'));

//---------------------------------------------------------
function faltaVisitar(paisesVisitados) {
  var totalPaises = 193; //variável dentro de escopo, ou seja, dentro de um bloco {}, nesse caso, da função
  return `Faltam visitar ${totalPaises - paisesVisitados} países.`;
}
console.log(faltaVisitar(20));

//---------------------------------------------------------------

//escopo léxico, ou seja, funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer'; 

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
outrosDados() //retorna erro, pois ela é uma função dentro de outra

//--------------------------------------------------------------

//Hoisting
//ANtes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); //imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

