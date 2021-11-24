// Por qual motivo o código abaixo retorna com erros?
//o erro estava dando pq o console estava do lado de fora do escopo de bloco
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
// O erro foi corrigido pq o const foi tirado de dentro da função

const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(10));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);