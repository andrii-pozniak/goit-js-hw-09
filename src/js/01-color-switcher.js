
const startBtn  = document.querySelector(`button[data-start]`);
const stopBtn  = document.querySelector(`button[data-stop]`);
const bodyStyle = document.querySelector(`body`);

stopBtn.disabled = false;


let timerid = null;
let throttle = require('lodash.throttle');
function stopClick() {
  
    const stopClickBtn = throttle(startBtn, 500)
  }


startBtn.addEventListener (`click`, () => {    
 
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerid = setInterval(() => { 
    bodyStyle.style.backgroundColor = getRandomHexColor();

    
}, 1000);

});

function getRandomHexColor() {
console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
 
  stopBtn.addEventListener(`click`, () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerid)
  })

