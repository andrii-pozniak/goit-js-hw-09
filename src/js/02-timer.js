import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`button[data-start]`);
const timerNumber = document.querySelector(`span[data-days]`);
const hoursNumber = document.querySelector(`span[data-hours]`);
const minutesNumber = document.querySelector(`span[data-minutes]`)
const secondsNumber = document.querySelector(`span[data-seconds]`)

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
   
    onClose(selectedDates) {
           
    if (selectedDates[0] <= Date.now()) {
        Notiflix.Notify.failure("Please choose a date in the future");
        
        return;        
    }
    startBtn.addEventListener(`click`, () => {
        timer.start();    
    });
       
    },
   
  };   
  const fp = flatpickr("#datetime-picker", options);

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
            const deltaTime = fp.selectedDates[0] - Date.now();
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


