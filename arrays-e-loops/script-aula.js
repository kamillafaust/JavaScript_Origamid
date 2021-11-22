// Array
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); //Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final ao array
videoGames.length; // tamanho do array

//-----------------------------------------------------

// Loops
//For
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

//While

var i = 0;
while (i < 10) {
  console.log(i);
  i++
}

var frutas = ['Banana', 'Abacaxi', 'Uva', 'Laranja', 'Melancia'];

                   //primeiro pega o conteúdo do ítem
                   //segundo pega o número do index
                   //terceiro apresenta o arrau todo
frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array)
});