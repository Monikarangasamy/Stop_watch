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
  clearInterval(interval); // Avoid multiple intervals
  interval = setInterval(startTimer, 10); // Run every 10ms
});

btnStop.addEventListener('click', () => {
  clearInterval(interval);
});

btnReset.addEventListener('click', () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  tens = 0;

  getMinutes.innerHTML = "00";
  getSeconds.innerHTML = "00";
  getTens.innerHTML = "00";
});

function startTimer() {
  tens++;

  if (tens > 99) {
    seconds++;
    tens = 0;
  }

  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }

  getTens.innerHTML = tens < 10 ? "0" + tens : tens;
  getSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  getMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
}
