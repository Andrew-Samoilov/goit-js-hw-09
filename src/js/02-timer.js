console.log(`666`);
let refs = {
  startBtn: document.querySelector('button[data-start]'),
  timerFieldDay: document.querySelector(`[data-days]`),
  timerFieldHour: document.querySelector(`[data-hours]`),
  timerFieldMin: document.querySelector(`[data-minutes]`),
  timerFieldSec: document.querySelector(`[data-seconds]`),
};

console.log(refs.startBtn);
console.log(refs.timerFieldDay);

// console.log(refs.timerFieldHour.textContent=9);

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

function updateTimer(){
    refs.timerFieldDay.textContent=19;
    refs.timerFieldDay.textContent=33;
    refs.timerFieldHour.textContent=05;
    refs.timerFieldMin.textContent=12;
    refs.timerFieldSec.textContent=4;

}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
updateTimer();
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
