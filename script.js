let time = 0;
let isRunning = false;
let interval;

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Function to start the stopwatch
startButton.addEventListener("click", () => {
    if (!isRunning) {
        interval = setInterval(() => {
            time++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
});

// Function to stop the stopwatch
stopButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
});

// Function to reset the stopwatch
resetButton.addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
    time = 0;
    updateDisplay();
});

function updateDisplay() {
    const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");

    hoursElement.innerHTML = `${hrs} <span>hours</span>`;
    minutesElement.innerHTML = `${mins} <span>minutes</span>`;
    secondsElement.innerHTML = `${secs} <span>seconds</span>`;
}
