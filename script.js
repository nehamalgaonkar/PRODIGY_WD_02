let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
    const startStopButton = document.getElementById('startStop');
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateDisplay, 1000);
        startStopButton.textContent = 'Pause';
    }
    isRunning = !isRunning;
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById('display').textContent = 
        `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

function formatNumber(num) {
    return num < 10 ? `0${num}` : num;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
    document.getElementById('laps-list').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById('display').textContent;
        const lapList = document.getElementById('laps-list');
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}
