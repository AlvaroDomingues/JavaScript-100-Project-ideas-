//Insere um número
function insertNum(num){
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num
}

//Apaga todos os números
function clearNum(){
  document.getElementById('resultado').innerHTML = " "
}

//Apaga um número
function back(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calc() {
  var resultado = document.getElementById('resultado').innerHTML;

  // Verifica se há um resultado definido
  if (resultado) {
      resultado = resultado.replace(/X/g, '*').replace(/÷/g, '/');

      // Verifica se a expressão é válida
      try {
          // Tenta avaliar a expressão
          var resultadoFinal = eval(resultado);

          // Verifica se o resultado é um número
          if (!isNaN(resultadoFinal)) {
              document.getElementById('resultado').innerHTML = resultadoFinal;
          } else {
              alert('Insira um número.');
          }
      } catch (error) {
          // Captura erros de expressão inválida
          alert('Insira um número.');
      }
  } else {
      alert('Insira um número.');
  }
}