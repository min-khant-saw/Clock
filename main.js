const hours = document.querySelector(".hour"),
  minutes = document.querySelector(".minute"),
  dayAndNight = document.querySelector(".day-and-night");

const date = new Date();
let dn = null;

setInterval(() => {
  let hour = date.getHours(),
    minute = date.getMinutes();
  if (hour > 12) {
    hour -= 12;
    dn = "pm";
  } else {
    dn = "am";
  }
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  dayAndNight.innerHTML = dn;
}, 1000);
