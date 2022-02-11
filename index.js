const newYear = "1 Jan 2023"

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")


function countdown() { 
    const newYearsEve = new Date(newYear)
    const now = new Date()

    const totalSeconds = (newYearsEve - now) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    mins.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

let click = 0;

function myImage() {
    var url = "";
    if(click % 2 == 0){
        url = "./snow.jpg"
    }
    else {
        url = "./snow2.jpg"
    }
    document.getElementById("body").style.backgroundImage = "url("+url+")";

    click += 1;
}

countdown();

setInterval(countdown, 1000)