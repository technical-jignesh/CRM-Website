let days = document.getElementById("days23");
let hours = document.getElementById("hours23");
let mins = document.getElementById("mins23");
let seconds = document.getElementById("seconds23");

let oct = "1 Jan 2023";

function countdown() {
    let octDate = new Date(oct);
    let currentDate = new Date();

    let totalSeconds = (octDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    days23.innerHTML = days;
    hours23.innerHTML = hours;
    mins23.innerHTML = mins;
    seconds23.innerHTML = seconds;
}
setInterval(countdown, 1000)