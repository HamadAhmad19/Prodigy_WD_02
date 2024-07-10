let startTime = 0;
let intervalId;

const hrElement = document.getElementById('hr');
const minElement = document.getElementById('min');
const secElement = document.getElementById('sec');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!intervalId) {
        startTime = Date.now();
        intervalId = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetTimer() {
    stopTimer();
    hrElement.textContent = '00';
    minElement.textContent = '00';
    secElement.textContent = '00';
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hrElement.textContent = hours.toString().padStart(2, '0');
    minElement.textContent = minutes.toString().padStart(2, '0');
    secElement.textContent = seconds.toString().padStart(2, '0');
}
