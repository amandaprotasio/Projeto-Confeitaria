var inputMassa1 = document.querySelector('#massa01');
var inputMassa2 = document.querySelector('#massa02');
var inputMassa3 = document.querySelector('#massa03');

var inputRecheio1 = document.querySelector('#recheio01');
var inputRecheio2 = document.querySelector('#recheio02');
var inputRecheio3 = document.querySelector('#recheio03');

var inputCobertura1 = document.querySelector('#cobertura01');
var inputCobertura2 = document.querySelector('#cobertura02');
var inputCobertura3 = document.querySelector('#cobertura03');

var massas    = document.getElementsByName('massa');
var recheio   = document.getElementsByName('recheio');
var cobertura = document.getElementsByName('cobertura');

var valorTotal = 0;

inputMassa1.addEventListener('click', descobrirMassaSelecionada );
inputMassa2.addEventListener('click', descobrirMassaSelecionada );
inputMassa3.addEventListener('click', descobrirMassaSelecionada );

inputRecheio1.addEventListener('click', descobrirRecheioSelecionado );
inputRecheio2.addEventListener('click', descobrirRecheioSelecionado );
inputRecheio3.addEventListener('click', descobrirRecheioSelecionado );

inputCobertura1.addEventListener('click', descobrirCoberturaSelecionada );
inputCobertura2.addEventListener('click', descobrirCoberturaSelecionada );
inputCobertura3.addEventListener('click', descobrirCoberturaSelecionada );


function descobrirMassaSelecionada(){
  massaSelecionada = this.id;
console.log(massaSelecionada);
};

function descobrirRecheioSelecionado(){
  recheioSelecionado = this.id;
  console.log(recheioSelecionado);
};

function descobrirCoberturaSelecionada() {
  coberturaSelecionada = this.id;
  console.log(coberturaSelecionada);
};

function calcularValorBolo(){

 // Valor Massa Selecionada
  if (massaSelecionada == 'massa01') {
    valorMassa = 25;

  } else if (massaSelecionada == 'massa02') {
    valorMassa = 30;

  } else if (massaSelecionada == 'massa03') {
    valorMassa = 35;
  };



// Valor Recheio Selecionado
if (recheioSelecionado == 'recheio01') {
  valorRecheio = 25;

} else if (recheioSelecionado == 'recheio02') {
  valorRecheio = 30;

} else if (recheioSelecionado == 'recheio03') {
  valorRecheio = 35;
};

// Valor Cobertura Selecionada
if (coberturaSelecionada == 'cobertura01') {
  valorCobertura = 25;

} else if (coberturaSelecionado == 'cobertura02') {
  valorCobertura = 30;

} else if (coberturaSelecionado == 'cobertura03') {
  valorCobertura = 35;
};


valorTotal = valorMassa + valorRecheio + valorCobertura ;

console.log(valorTotal);

}
