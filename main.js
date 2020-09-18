var btn = document.getElementById('button');
var formsLink = document.getElementById('userInput');
var timer = document.getElementById('countdown');
var layout = document.getElementById('layout');

btn.addEventListener("click", function(){

let timerHours = document.getElementById("hoursInput").value;
let timerMinutes = document.getElementById("minutesInput").value;
let timerSeconds = document.getElementById("secondsInput").value;

var target = new Date().getTime();

target = target + (1000 * timerSeconds) + (1000 * 60 * timerMinutes) + (1000 * 60 * 60 * timerHours);

var secCounter = setInterval(countdownToEnd, 1000);

function countdownToEnd() {

    let current = new Date().getTime();
    let countTime = target - current;

    let hours = Math.floor((countTime/(1000 * 60 * 60)));
    let minutes = Math.floor((countTime % (1000 * 60 * 60))/ (1000 * 60));
    let seconds = Math.floor((countTime % (1000 * 60))/ 1000);

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    let timerDisplay = hours + ":" + minutes + ":" + seconds;
    document.getElementById("countdown").innerHTML = timerDisplay;

    if (countTime < 0){
        clearInterval(countdownToEnd);
        document.getElementById("countdown").innerHTML = "Time's Up";
    }
}

countdownToEnd();

});