console.log(`776`);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
// console.log(bodyEl);

let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    // console.log(`I love async JS!  ${Math.random()}`);
    bodyEl.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  console.log(`Interval with id ${timerId} has stopped!`);
});
