console.log(`7777777`);
import Notiflix from 'notiflix';
const refs = {
  formY: document.querySelector('.form'),
  amount: document.querySelector('input[name="amount"]'),
  delay: document.querySelector('input[name="delay"]'),
  steps: document.querySelector('input[name="step"]'),
};

// console.log(` delay `, refs.delay);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);yy
  });
}

refs.formY.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  // console.log(`inside form submit`);
  let amount = refs.amount.value;
  let delay = refs.delay.value;
  let steps = refs.steps.value;

  createPromise(1, delay)
    .then(({ position, delay }) => {
      // console.log(`✅ Fulfilled promise 1 in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise 1 in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      // console.log(`❌ Rejected promise 1 in ${delay}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise 1 in ${delay}ms`);
    });

  // console.log(` delay `, delay);

  for (let i = 2; i <= amount; i++) {
    delay = Number(steps * i);
    // console.log(`i ${i} delay `, delay);

    createPromise(i, delay)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${i} in ${delay}ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
  }
}
