import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`button[data-start]`);
const timerStyle = document.querySelector(".timer");

const timerNumber = document.querySelector(`span[data-days]`);
const hoursNumber = document.querySelector(`span[data-hours]`);
const minutesNumber = document.querySelector(`span[data-minutes]`)
const secondsNumber = document.querySelector(`span[data-seconds]`)


console.log(timerNumber)
// addLeadingZero();

const fp = flatpickr("#datetime-picker",options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
   count: null,
    onClose(selectedDates) {
     
      const currentTime = selectedDates[0];
    const starTime = Date.now();
  
    this.count = currentTime - starTime;
   
    if (currentTime <= starTime) {
        window.alert("Please choose a date in the future");
    }
    // console.log(this.count)
    },
   
  }); 
//   console.log(this.count)
  
input.addEventListener(`click`, onClickInput);

function onClickInput(evn) {  
    evn.currentTarget.value = fp;   
}

startBtn.addEventListener(`click`, onClickStartBtn => {
    timer.start();

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
  
//   console.log("time", (convertMs(2000))); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
convertMs();

function padStart(value) {
    // console.log(String(value).padStart(2, '0'))

    return String(value).padStart(2, '0')
};

padStart();
class Timer {
    constructor() {
        this.isActive = false;  
    }
   
    start () {
        const onStart = Date.now();
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - onStart;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            timerNumber.textContent = `${padStart(days)}`

            minutesNumber.textContent = `${padStart(minutes)}`
            minutesNumber.textContent = `${padStart(minutes)}`
            hoursNumber.textContent = `${padStart(hours)}`
            secondsNumber.textContent = `${padStart(seconds)}`
            console.log(timerNumber.dataset.days)
            console.log(`${days}:${hours}:${minutes}:${seconds}`)

        }, 1000);
    }
}
const timer = new Timer();


