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

var paragrafoValorTotal = document.querySelector('p.valor-total');
var valorTotal = 0;
var valorMassa = 0;
var valorRecheio = 0;
var valorCobertura = 0;
var massaSelecionada;
var recheioSelecionado;
var coberturaSelecionada;

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
  calcularValorBolo();
};

function descobrirRecheioSelecionado(){
  recheioSelecionado = this.id;
  console.log(recheioSelecionado);
  calcularValorBolo();
};

function descobrirCoberturaSelecionada() {
  coberturaSelecionada = this.id;
  console.log(coberturaSelecionada);
  calcularValorBolo();
};

function calcularValorBolo(){

 // Valor Massa Selecionada
  if (massaSelecionada == 'massa01') {
    valorMassa = 80;

  } else if (massaSelecionada == 'massa02') {
    valorMassa = 70;

  } else if (massaSelecionada == 'massa03') {
    valorMassa = 65;
  };



// Valor Recheio Selecionado
if (recheioSelecionado == 'recheio01') {
  valorRecheio = 80;

} else if (recheioSelecionado == 'recheio02') {
  valorRecheio = 70;

} else if (recheioSelecionado == 'recheio03') {
  valorRecheio = 65;
};

// Valor Cobertura Selecionada
if (coberturaSelecionada == 'cobertura01') {
  valorCobertura = 80;

} else if (coberturaSelecionada == 'cobertura02') {
  valorCobertura = 70;

} else if (coberturaSelecionada == 'cobertura03') {
  valorCobertura = 65;
};


valorTotal = valorMassa + valorRecheio + valorCobertura ;
paragrafoValorTotal.innerHTML = valorTotal;
var stringValor = 'Valor Total: R$';
paragrafoValorTotal.innerHTML = stringValor + paragrafoValorTotal.innerHTML;


console.log(valorTotal);

}
