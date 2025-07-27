let minutes = 0;
let seconds = 0;
let tens = 0;

let getMinutes = document.querySelector('.minutes');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');

let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

let interval;

btnStart.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
  clearInterval(interval);
});

btnReset.addEventListener('click', () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  tens = 0;
  updateDisplay();
});

function startTimer() {
  tens++;
  if (tens > 99) {
    tens = 0;
    seconds++;
  }

  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }

  updateDisplay();
}

function updateDisplay() {
  getMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  getSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
  getTens.innerHTML = tens < 10 ? '0' + tens : tens;
}
