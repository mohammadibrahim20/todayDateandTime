const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const toggleFormatButton = document.getElementById('toggle-format');
const todayDates = document.getElementById('date');

let is24HourFormat = true;

toggleFormatButton.addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  toggleFormatButton.textContent = is24HourFormat ? '12-hour format' : '24-hour format';
});

function updateTime() {
  const now = new Date();
//   console.log(now)
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dateName = days[now.getDay()];
//   console.log(dateName)

  const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    const todayDate = `${dateName} ${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}
    `
    
   
    console.log(todayDate)
//   console.log(date);

  if (!is24HourFormat) {
    hours %= 12;
    if (hours === 0) {
      hours = 12;
    }
  }
  todayDates.innerText = todayDate;
  hoursElement.textContent = hours.toString()
//   .padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');

  setTimeout(updateTime, 1000);
}

updateTime();