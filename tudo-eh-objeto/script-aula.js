
//tudo é objeto
var nome = "Kamilla";

nome.length; //7
nome.charAt(5); // l
nome.replace('lla', 'lly'); // 'Kamilly'
nome; // 'Kamilla'

var nomeMinusculo = nome.toLowerCase();

//-------------------------------------------------------

var altura = 1.8;
altura.toString();
altura.toFixed(); // ele arredonda o número

//-------------------------------------------------------

var btn = document.querySelector('.btn');
btn.classList.add('azul') //adiciona a classe azul, ex: class="btn azul"
btn.innerText; // 'Clique aqui'
btn.addEventListener('click', function() {
  console.log('Clicou')
})