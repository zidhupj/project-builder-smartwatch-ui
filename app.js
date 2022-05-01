const currentDate = new Date()
const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`
document.querySelector('.time').innerHTML = time;
document.querySelector('.datetime-time').innerHTML = time;

const day = new Intl.DateTimeFormat('india', { weekday: 'long' }).format(currentDate)
document.querySelector('.datetime-day').innerHTML = day.toLocaleUpperCase();