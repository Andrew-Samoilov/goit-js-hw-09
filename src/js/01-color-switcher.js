function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
// console.log(bodyEl);

let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    // console.log(`I love async JS!  ${Math.random()}`);
    bodyEl.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  console.log(`Interval with id ${timerId} has stopped!`);
});
