var seconds = 00;
var minutes = 00;
var hours = 00;

var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendHours = document.getElementById("hours");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;

function startTimer() {
  seconds++;

  if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + seconds;
  }

  if (minutes <= 9) {
    appendMinutes.innerHTML = "0" + minutes;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }

  if (mins > 59) {
    hours++;
    appendHours.innerHTML = "0" + hours;
    minutes = 0;
    appendMinutes.innerHTML = "0" + minutes;
  }

  if (hours <= 9) {
    appendHours.innerHTML = "0" + hours;
  }

  if (hrs > 9) {
    appendHours.innerHTML = hours;
  }
}

buttonStart.onclick = function () {
    interval = setInterval(startTimer,1000);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  seconds = "00";
  minutes = "00";
  hours = "00";
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
  appendHours.innerHTML = hours;
}