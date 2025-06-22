const timerTextElem = document.getElementById("timer-text");
const countdownText = document.getElementById("countdown-text");
const lapsContainer = document.getElementById("root");

// Stopwatch variables
let timeInSec = 0;
let stopwatchInterval = null;

// Timer (Countdown) variables
let timerSecLeft = 0;
let countdownInterval = null;

// Format function for both stopwatch and timer
const format = (sec) => {
  const s = sec % 60;
  const m = Math.floor(sec / 60) % 60;
  const h = Math.floor(sec / 3600);
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};

// Stopwatch Functions
const handleStart = () => {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      timeInSec++;
      timerTextElem.innerText = format(timeInSec);
    }, 1000);
  }
};

const handlePause = () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
};

const handleResume = () => {
  handleStart(); // Reuse same logic
};

const handleReset = () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  timeInSec = 0;
  timerTextElem.innerText = "00:00:00";
  lapsContainer.innerHTML = "";
};

const handleLap = () => {
  const para = document.createElement("p");
  para.innerText = `Lap: ${format(timeInSec)}`;
  lapsContainer.appendChild(para);
};

const handleClearLaps = () => {
  lapsContainer.innerHTML = "";
};

// Timer (Countdown) Functions
const startCountdown = () => {
  const min = parseInt(document.getElementById("timerMin").value) || 0;
  const sec = parseInt(document.getElementById("timerSec").value) || 0;

  timerSecLeft = min * 60 + sec;
  countdownText.innerText = format(timerSecLeft);

  if (countdownInterval) clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    timerSecLeft--;
    countdownText.innerText = format(timerSecLeft);

    if (timerSecLeft <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      alert("⏰ Time's up!");
    }
  }, 1000);
};

const pauseCountdown = () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
};

const resumeCountdown = () => {
  if (!countdownInterval && timerSecLeft > 0) {
    countdownInterval = setInterval(() => {
      timerSecLeft--;
      countdownText.innerText = format(timerSecLeft);

      if (timerSecLeft <= 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        alert("⏰ Time's up!");
      }
    }, 1000);
  }
};

const resetCountdown = () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
  timerSecLeft = 0;
  countdownText.innerText = "00:00:00";
  document.getElementById("timerMin").value = 0;
  document.getElementById("timerSec").value = 30;
};
