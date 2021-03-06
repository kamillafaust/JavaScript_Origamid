// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado;
}
console.log(isTruthy(1));
console.log(isTruthy('uhuh'));
console.log(isTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Nome completo: ${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Kamilla', 'Faust'));

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if(numero % 2 == 0 ) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPar(4));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(dado) {
  return typeof dado;
}
console.log(verificaTipo('oi'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function() {
  console.log('Kamilla Faust');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));