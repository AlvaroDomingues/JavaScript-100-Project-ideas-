/// Pegar os elementos do HTML para poder manipular no Javascript
let hora = document.getElementById('hora');
let min = document.getElementById('minutos');
let seg = document.getElementById('segundos');
let day = document.getElementById('dia');

const diasDaSemana = [
  'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
];

///Função para tornar o relógio dinamico
const relogio = setInterval(() => {
  let agora = new Date();

/// Pegar as horas, transformar em string e garantir que tenha ao menos duas casas decimais, quando não tiver adicionar o 0.
  let presentHour = agora.getHours().toString().padStart(2, '0');
  let presentMinutes = agora.getMinutes().toString().padStart(2, '0');
  let presentSeconds = agora.getSeconds().toString().padStart(2, '0');

  ///Variável para pegar o número que recebemos da função getDay() e ralácionar com um dia da Semana presente no array diasDaSemana, para que possa aparecer na tela o dia ao invés do número
  let presentDay = diasDaSemana[agora.getDay()];

  ///Usando o innerHTML para mostrar o que foi feito no JavaScript na tela
  hora.innerHTML = presentHour;
  min.innerHTML = presentMinutes;
  seg.innerHTML = presentSeconds;
  day.innerHTML = presentDay;

})








