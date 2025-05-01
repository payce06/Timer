const timeInput = document.getElementById('timeInput');
console.log("TimeInput", timeInput);
const startBtn = document.getElementById('startBtn');
console.log("StartBtn", startBtn);
const resetBtn = document.getElementById('resetBtn');
console.log("ResetBtn", resetBtn);
const display = document.getElementById('display');

let countdown;
let remainingTime = 0;

startBtn.addEventListener('click', () => {
    const time = parseInt(timeInput.value);
    console.log("time", time);
    if (isNaN(time) || time <= 0) {
        alert('Please enter a valid number grreater than 0.');
        return;
    }

    remainingTime = time;
    display.textContent = remainingTime;
    timeInput.disabled = true;
    startBtn.disabled = true;

    countdown = setInterval (() => {
        remainingTime--;
        display.textContent = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(countdown);
            display.textContent = "⏰ Done!"
            timeInput.disabled = false;
            startBtn.disabled = false;
        }
    }, 1000);
});

resetBtn.addEventListener('click', () => {
    clearInterval(countdown);
    timeInput.disable = false;
    startBtn.disabled = false;
    timeInput.value = '';
});