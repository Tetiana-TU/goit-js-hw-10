import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



document.getElementById('datetime-picker').getDate = new Date();
console.log(new Date);
const btnStart = document.querySelector('[data-start]');

const timerCal = {
 timerDays: document.querySelector('[data-days]'),
 timerHours: document.querySelector('[data-hours]'),
 timerMinutes: document.querySelector('[data-minutes]'),
 timerSeconds: document.querySelector('[data-seconds]'),
};

console.log(timerCal);


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
  console.log(options);

  
