import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`button[data-start]`);

// flatpickr(selector, options)
   
const fp = flatpickr("#datetime-picker",options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // enableTime: true,
    // dateFormat: "Y-m-d H:i",
    onClose(selectedDates) {
     
      const currentTime = selectedDates[0];
    const starTime = Date.now();
    // console.log(`current`, currentTime)
    // console.log(`start`, starTime);
    // console.log(`date`, currentTime);
    const count = currentTime - starTime;
    // console.log(`count`, count);

    if (currentTime <= starTime) {
        window.alert("Please choose a date in the future");
    }
    },
   
    
  });
  
  
  
input.addEventListener(`click`, onClickInput);

function onClickInput(evn) {
    // onClose(selectedDates)
    
   
    // const currentTime = fp.parseDate;
    evn.currentTarget.value = fp;
    // console.log(starTime)
    // console.log(currentTime)
    
}

startBtn.addEventListener(`click`, () => {
    onClose()
    // input[type="text"] = flatpickr.dateFormat;
    // console.log(flatpickr.dateFormat);
})
