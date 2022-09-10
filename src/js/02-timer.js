import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`button[data-start]`);
const timerNumber = document.querySelector(`span[data-days]`);
const hoursNumber = document.querySelector(`span[data-hours]`);
const minutesNumber = document.querySelector(`span[data-minutes]`)
const secondsNumber = document.querySelector(`span[data-seconds]`)


const fp = flatpickr("#datetime-picker",options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
   
    onClose(selectedDates) {
     
        const currentTime = selectedDates[0];
        const starTime = Date.now();
     
    if (currentTime <= starTime) {
        window.alert("Please choose a date in the future");
        
        return;
        
    }
    startBtn.addEventListener(`click`, () => {
        timer.start();
    
    });
       
    },
   
  });   
 
input.addEventListener(`click`, () => {

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

function padStart(value) {
    return String(value).padStart(2, '0')
};

padStart();
class Timer {
    constructor() {
        this.isActive = false;  
    }
   
    start () {
        
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        setInterval(() => {
            const onStart = Date.now();
            const currentTime = fp.selectedDates[0];
            const deltaTime = currentTime - onStart;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            timerNumber.textContent = `${padStart(days)}`

            minutesNumber.textContent = `${padStart(minutes)}`
            minutesNumber.textContent = `${padStart(minutes)}`
            hoursNumber.textContent = `${padStart(hours)}`
            secondsNumber.textContent = `${padStart(seconds)}`
           
        }, 1000);
    }
}
const timer = new Timer();


