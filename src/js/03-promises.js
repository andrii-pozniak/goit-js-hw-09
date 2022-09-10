const refs = {
  inputDelay: document.querySelector(`input[name="delay"]`),
  inputStep: document.querySelector(`input[name="step"]`),
  inputAmount: document.querySelector(`input[name="amount"]`),

}

function createPromise(position, delay) {
  return new Promise(resolve => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      resolve({position, delay})
      
    }, delay);
  })

  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
