let body = document.querySelector("body");

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", function() {
    body.classList.toggle("dark");

    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

function updateTime() {

const now = new Date();

let currentSec = now.getSeconds(),
    currentMin = now.getMinutes(),
    currentHour = now.getHours(),

    secondDeg = (currentSec * 360) / 60,
    minuteDeg = (currentMin * 360 / 60),
    hourDeg = (currentHour * 360 / 12) + (currentMin / 2);


second.style.rotate = secondDeg + "deg";

minute.style.rotate = minuteDeg + "deg";

hour.style.rotate = hourDeg + "deg";

}

updateTime();

setInterval(updateTime, 1000);