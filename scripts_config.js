<script>

var inputMassa1 = document.querySelector('#massa01');
var inputMassa2 = document.querySelector('#massa02');
var inputMassa3 = document.querySelector('#massa03');
var massas = document.getElementsByName('massa');
// var massaSelecionada = 'branco';

inputMassa1.addEventListener('click', descobrirMassaSelecionada );
inputMassa2.addEventListener('click', descobrirMassaSelecionada );
inputMassa3.addEventListener('click', descobrirMassaSelecionada );



function descobrirMassaSelecionada(){

  massaSelecionada = this.id;
//   massas.forEach(function(key) { if (key.checked == true) {
//     massaSelecionada = key.id;
//   };
//
//   }
// )
console.log(massaSelecionada);
}

// function calcularValorBolo(){
//
//   if (massaSelecionada == 'branco') {
//     valorMassa = 25;
//
//   } else if (massaSelecionada == 'chocolate') {
//     valorMassa = 30;
//
//   } else if (massaSelecionada == 'redvelvet') {
//     valorMassa = 35;
//   }
//
//
// }

</script>
