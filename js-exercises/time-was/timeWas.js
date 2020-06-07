// Date.now = () => 1516816290;
function timeWas(now, time) {
  if (isNaN(now)) throw new typeError("'now' should be a number");
  const currentDate = time ? time : Date.now();
  if (isNaN(currentDate)) throw new typeError("'time' should be a number");
  let timeMap = {
    second: 1000,
    minute: function () {
      return this.second * 60;
    },
    hour: function () {
      return this.minute() * 60;
    },
    day: function () {
      return this.hour() * 24;
    },
    week: function () {
      return this.day() * 7;
    },
    month: function () {
      return this.day() * 30;
    },
    year: function () {
      return this.month() * 12;
    },
  };
  if (currentDate - now < timeMap.second) return "just now";
  else if (currentDate - now < timeMap.minute()) {
    return `${(currentDate - now) / timeMap.second} second${
      currentDate - now === timeMap.second ? "" : "s"
    } ago`;
  } else if (currentDate - now < timeMap.hour()) {
    return `${(currentDate - now) / timeMap.minute()} minute${
      currentDate - now === timeMap.minute() ? "" : "s"
    } ago`;
  } else if (currentDate - now < timeMap.day()) {
    return `${(currentDate - now) / timeMap.hour()} hour${
      currentDate - now === timeMap.hour() ? "" : "s"
    } ago`;
  } else if (currentDate - now < timeMap.week()) {
    return `${(currentDate - now) / timeMap.day()} day${
      currentDate - now === timeMap.day() ? "" : "s"
    } ago`;
  } else if (currentDate - now < timeMap.month()) {
    return `${(currentDate - now) / timeMap.week()} week${
      currentDate - now === timeMap.week() ? "" : "s"
    } ago`;
  } else if (currentDate - now < timeMap.year()) {
    return `${(currentDate - now) / timeMap.month()} month${
      currentDate - now === timeMap.month() ? "" : "s"
    } ago`;
  } else if (currentDate - now >= timeMap.year()) {
    return `${(currentDate - now) / timeMap.year()} year${
      currentDate - now === timeMap.year() ? "" : "s"
    } ago`;
  }
}

export { timeWas };
