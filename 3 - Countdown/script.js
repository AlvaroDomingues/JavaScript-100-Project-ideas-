var c = 0

function contagem(){
  const number = document.getElementById('time');
  const valor = parseInt(number.value);
      c = valor
      timer()
      setInterval(timer, 1000)
}

function timer() {
  if(c > -1 ){
    const countdown = document.getElementById('countdown');
    countdown.innerHTML = c
    c = c - 1
    console.log(c)
  }
}