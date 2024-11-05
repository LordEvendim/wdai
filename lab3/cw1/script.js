const timer = document.getElementById("time-content");
const stopBtn = document.getElementById("stop-btn");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

let time = 0;
let startTime = 0;

let interval = 0;

const updateStopwatch = () => {
  const diff = Date.now() - startTime;

  const seconds = (diff / 1000) % 60;
  const minutes = seconds / 60;

  if (minutes < 1) {
    timer.textContent = `${Math.round(seconds)}s`;
    return;
  }

  timer.textContent = `${Math.round(minutes)}m ${Math.round(seconds)}s`;
};

const start = () => {
  startTime = Date.now();
  interval = setInterval(() => {
    updateStopwatch();
  }, 1000);
};

const stop = () => {
  clearInterval(interval);
};

const reset = () => {
  startTime = Date.now();
  updateStopwatch();
};

stopBtn.onclick = stop;
startBtn.onclick = start;
resetBtn.onclick = reset;
