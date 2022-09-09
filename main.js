const hours = document.querySelector(".hour"),
  minutes = document.querySelector(".minute");

const containerDate = new Date();

setInterval(() => {
  let hour = containerDate.getHours(),
    minute = containerDate.getMinutes();
  if (hour > 12) {
    hour -= 12;
  }
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
}, 1000);
