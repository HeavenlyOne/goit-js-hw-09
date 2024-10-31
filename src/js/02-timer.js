import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { convertMs } from "./helpers/calc-function";

const inputField = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]')
const daysT = document.querySelector('span[data-days]')
const hoursT = document.querySelector('span[data-hours]')
const minutesT = document.querySelector('span[data-minutes]')
const secondsT = document.querySelector('span[data-seconds]')

let userSelectedDate;
let timerId = null;


btnStart.disabled = true;
btnStart.addEventListener('click', onStartClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!(selectedDates[0] > options.defaultDate)) {
      btnStart.disabled = true;
      iziToast.show({
        message: 'Please choose a date in the future',
        position: "topCenter",
        timeout: 2000,
        backgroundColor: 'red',
        messageColor: 'white',
        progressBar: false,
      });
    } else {
      btnStart.disabled = false;
      userSelectedDate = selectedDates[0]
    }
  },
};

function onStartClick() {
  btnStart.disabled = true;
  inputField.disabled = true;
  timerId = setInterval(() => {
    const dateC = new Date();
    const interval = userSelectedDate.getTime() - dateC.getTime()
    const neededTime = convertMs(interval);

    if (interval < 0) {
      clearInterval(timerId);
      inputField.disabled = false;
    } else {
      daysT.textContent = addLeadingZero(neededTime.days);
      hoursT.textContent = addLeadingZero(neededTime.hours);
      minutesT.textContent = addLeadingZero(neededTime.minutes);
      secondsT.textContent = addLeadingZero(neededTime.seconds);
    }
}, 1000)  
};

function addLeadingZero(value) {
 return value.toString().padStart(2, '0')
  // return value.toString().length < 3 ? value.toString().padStart(2, '0') : value.toString().padStart(value.toString().length, '0');
}


flatpickr(inputField, options);


