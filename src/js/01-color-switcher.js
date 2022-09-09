const startBtn  = document.querySelector(`button[data-start]`);
const stopBtn  = document.querySelector(`button[data-stop]`);
const bodyStyle = document.querySelector(`body`)

console.log(bodyStyle)
let timerid = null;

startBtn.addEventListener (`click`, () => {timerid = setInterval(() => { 
    bodyStyle.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

}, 1000)} );

function getRandomHexColor() {
console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
 
  stopBtn.addEventListener(`click`, () => {
    clearInterval(timerid)
  })

