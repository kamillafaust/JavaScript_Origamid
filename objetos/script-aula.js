var pessoa = {
  nome: 'André',
  idade: 28,
}
console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//-------------------------------------------------------
//Atualização:

var quadradoDois = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}
console.log(quadradoDois.area(5));
console.log(quadradoDois.perimetro(5));

//-------------------------------------------------------

Math.PI; //3.14
Math.random(); //número aleatório

var pi = Math.PI;
console.log(pi); //3.14

//------------------------------------------------------

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu.backgroundColor = '#8E4';
var bg = menu.backgroundColor;

//podemos adicionar novas propriedades e
//métodos tbm

menu.color = 'yellow';
menu.esconder = function() {
  console.log('Escondeu')
}
console.log(menu.esconder());

