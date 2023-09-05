const API_KEY = "";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // fetch는 promise -> promise 서버 응답 나중에 받음(응답을 받기 전에 다른 일을 수행할 수 있음)
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you."); 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)  // 브라우저에서 위치 좌표 제공(WiFi, 위치, GPS 등)