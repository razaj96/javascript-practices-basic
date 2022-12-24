// problem 1
const today = new Date();

const day = today.getDay();
const month = today.getMonth();
const year = today.getFullYear();
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//need to fix this to get AM or PM
function getDate() {
  document.getElementById("current-day").innerHTML = `Today is ${daylist[day]}`;
  document.getElementById(
    "current-date"
  ).innerHTML = `Current time is : ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
}

getDate();

// problem 2
function printPage() {
  window.print();
}
