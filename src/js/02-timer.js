console.log(`6666`);
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let refs = {
  startBtn: document.querySelector('button[data-start]'),
  timerFieldDay: document.querySelector(`[data-days]`),
  timerFieldHour: document.querySelector(`[data-hours]`),
  timerFieldMin: document.querySelector(`[data-minutes]`),
  timerFieldSec: document.querySelector(`[data-seconds]`),
  dateField: document.querySelector('#datetime-picker'),
};

refs.startBtn.disabled = true;
let timerId = null;
let timeTimer = new Date();
// console.log(refs.startBtn);
// console.log(refs.timerFieldDay);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(`Inside function.`, selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      // window.alert(`Please choose a date in the future`);
    } else {
      refs.startBtn.disabled = false;
      timeTimer = Date.parse(selectedDates[0]) - Date.now();
      console.log(`timeTimer`, timeTimer);
      // console.log(`selectedDates[0]`,Date.parse(selectedDates[0]));
      // let foo=Date.now();
      // console.log(`Date.now()`, foo);
      // updateTimer();
    }
  },
};

flatpickr(refs.dateField, options);

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    // console.log(`timeTimer-Date.now() - ${timeTimer - Date.now()}`);
    updateTimer();
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer() {
  if (timeTimer > 1) {
    let formatedTime = convertMs(timeTimer);
     // console.log(formatedTime);
    refs.timerFieldDay.textContent = addLeadingZero(formatedTime.days);
    refs.timerFieldHour.textContent = addLeadingZero(formatedTime.hours);
    refs.timerFieldMin.textContent = addLeadingZero(formatedTime.minutes);
    refs.timerFieldSec.textContent = addLeadingZero(formatedTime.seconds);
  } else {
    clearInterval(timerId);
  }
  timeTimer -= 1000;
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// updateTimer();
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
