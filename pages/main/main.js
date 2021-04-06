const smileContent1 = document.getElementsByClassName("smileContent1");
const smileContent2 = document.getElementsByClassName("smileContent2");
const smileContent3 = document.getElementsByClassName("smileContent3");
const smile = document.getElementsByClassName("smile");
const shadow = document.getElementsByClassName("shadow");
const smileHeader = document.getElementsByClassName("smileHeader");

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const speed = document.querySelector('.speed');
const weatherDescription = document.querySelector('.weather-description');
const city = document.getElementById('city');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=8ce61da97afdb455390227231c7736df
  &units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `Air humidity ${data.main.humidity}%`;
    speed.textContent = `Wind speed ${data.wind.speed}m/s`
}

const ls = localStorage.getItem('num');
if (ls == 1) {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg1");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
}
if (ls == 2) {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg2");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg1");
}
if (ls == 3) {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    smileHeader[0].classList.remove("new-bg1");
}
function showsmile1() {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg1");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    localStorage.setItem('num', '1');
}
function showsmile2() {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg2");
    smileHeader[0].classList.remove("new-bg3");
    smileHeader[0].classList.remove("new-bg1");
    localStorage.setItem('num', '2');
}

function showsmile3() {
    smile[0].style.display = "none";
    shadow[0].style.display = "none";
    smileHeader[0].classList.add("new-bg3");
    smileHeader[0].classList.remove("new-bg2");
    smileHeader[0].classList.remove("new-bg1");
    localStorage.setItem('num', '3');
}
function showsmile() {
    smile[0].style.display = "block";
    shadow[0].style.display = "block";
}




document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
city.addEventListener('focus', setCity);

function getCity() {
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
        city.textContent = '[Enter City]';
    } else {
        city.textContent = localStorage.getItem('city');
    }
}
// Set Name
function setCity(event) {
    if (event.type === 'focus') {
        city.textContent = ' ';
    }
    if (event.type === 'keypress') {
        // Make sure enter is pressed
        if (event.which == 13 || event.keyCode == 13) {
            city.blur();
            getWeather();
            if (city.textContent === '') {
                getCity();
            } else {
                localStorage.setItem('city', event.target.innerText);
            }

        }
    }
}

getCity();
getWeather();

smileHeader[0].addEventListener("click", showsmile);
smileContent1[0].addEventListener("click", showsmile1);
smileContent2[0].addEventListener("click", showsmile2);
smileContent3[0].addEventListener("click", showsmile3);