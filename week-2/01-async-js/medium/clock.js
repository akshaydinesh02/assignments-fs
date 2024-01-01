let hours = 0;
let minutes = 0;
let seconds = 0;
let hoursTwelve = 0;
meridian = "";

function startClock() {
  const curDate = new Date(Date.now());
  hours = curDate.getHours();
  minutes = curDate.getMinutes();
  seconds = curDate.getSeconds();

  hoursTwelve = hours > 12 ? hours - 12 : hours;
  meridian = hours > 12 ? "PM" : "AM";

  function increaseSeconds() {
    if (seconds === 59) {
      seconds = 1;
      increaseMinutes();
    } else {
      seconds += 1;
    }
    console.log(`${hours}:${minutes}:${seconds}`);
    console.log(`${hoursTwelve}:${minutes}:${seconds} ${meridian}`);
  }

  function increaseMinutes() {
    if (minutes === 59) {
      minutes = 1;
      increaseHours();
    } else {
      minutes += 1;
    }
  }

  function increaseHours() {
    if (hours === 23) {
      hours = 0;
    } else {
      hours += 1;
    }

    if (hoursTwelve === 12) {
      hours = 1;
    } else {
      hoursTwelve += 1;
    }
  }

  setInterval(increaseSeconds, 1000);
}

startClock();

// setInterval(increaseCounter, 1000);
