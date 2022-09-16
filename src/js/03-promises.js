import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector(`input[name="delay"]`),
  inputStep: document.querySelector(`input[name="step"]`),
  inputAmount: document.querySelector(`input[name="amount"]`),
  submitBtn: document.querySelector(`button`),
}

refs.submitBtn.addEventListener(`click`,(evn) => {
 evn.preventDefault();
  let amount = Number(refs.inputAmount.value);
  let delay = Number(refs.inputDelay.value);
  let step = Number(refs.inputStep.value);  
  
    for (let position = 1; position <= amount; position += 1) {
       
      console.log('step', step);
      console.log('delay', delay);
      
	
        createPromise(position, delay)
       .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
         .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
         });
       delay += step;         
    } 
  
});

function createPromise(position, delay) {  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const objectPromise = {position, delay}; 

    setTimeout(() => {
      if (shouldResolve) {
        resolve(objectPromise);
      } else {
        reject(objectPromise)
      console.log(delay);
      }     
      
    }, delay);
    
  });
  
};

