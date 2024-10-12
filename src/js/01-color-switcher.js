import { getRandomHexColor } from "./helpers/random-color"

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body')
let timerID = null;

buttonStop.disabled = true;

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop)

function onStart() {
    body.style.backgroundColor = getRandomHexColor();
    timerID = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    buttonStart.disabled = true;
    buttonStop.disabled = false;
}

function onStop() {
    clearInterval(timerID)
    buttonStart.disabled = false;
    buttonStop.disabled = true;
}

