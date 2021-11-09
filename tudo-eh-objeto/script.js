// nomeie 3 propriedades ou métodos de strings
var nome = "Kamilla"

nome.length;
nome.replace('lla', 'lly');
nome.toUpperCase();
nome.slice(2, 4); // mi

// nomeie 5 propriedades ou métodos de elementos do DOM
var exercicio = document.querySelector('.exercicio');

exercicio.innerText;
exercicio.addEventListener('click', function() {
  console.log('CLicouu');
})
exercicio.classList.add('exc');
exercicio.innerHTML;
exercicio.id //retorna o id, ou seja, red 
//appendChild()
console.log(exercicio);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V