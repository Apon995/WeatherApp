let apiKey = "81db9fd365b748851a5157cd08bb288e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

async function getLocationWeather(lat, lon) {
    let response = await fetch(
        apiUrl + "lat=" + lat + "&lon=" + lon + `&appid=${apiKey}`
    );
    let data = await response.json();

    document.getElementById("skydisc").innerHTML = data.weather[0].main;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("country").innerHTML = data.sys.country;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "Km/h";

    let weather = document.querySelector(".weather-icon");
    if (data.weather[0].main == "Haze") {
        weather.src = "./assets/Haze.png";
    } else if (data.weather[0].main == "Clouds") {
        weather.src = "./assets/Clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weather.src = "./assets/Clear.png";
    } else if (data.weather[0].main == "Drizzle") {
        weather.src = "./assets/Drizzle.png";
    } else if (data.weather[0].main == "Rain") {
        weather.src = "./assets/Rain.png";
    } else if (data.weather[0].main == "Snow") {
        weather.src = "./assets/Snow.png";
    } else {
        weather.src = "./assets/Clear.png";
    }
}

const getPosition = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("your loction is cannot find ");
    }
};

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    getLocationWeather(lat, lon);
}
function showError(error) {
    if (error.code === 1) {
        console.log(error.message);
    } else if (error.code === 2) {
        console.log(error.message);
    } else if (error.code === 3) {
        console.log(error.message);
    } else {
        console.log(error);
    }
}

getPosition();

let ApiKey = "81db9fd365b748851a5157cd08bb288e";
let ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeather(cityName) {
    let response = await fetch(ApiUrl + cityName + `&appid=${ApiKey}`);
    let data = await response.json();

    if (data.cod == "404") {
        document.getElementById("error").innerText =
            "City is not found Try again !";
        setTimeout(() => {
            document.getElementById("error").innerText = "";
        }, 5000);

        return;
    }

    document.getElementById("skydisc").innerHTML = data.weather[0].main;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("country").innerHTML = data.sys.country;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "Km/h";

    let weather = document.querySelector(".weather-icon");
    if (data.weather[0].main == "Haze") {
        weather.src = "./assets/Haze.png";
    } else if (data.weather[0].main == "Clouds") {
        weather.src = "./assets/Clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weather.src = "./assets/Clear.png";
    } else if (data.weather[0].main == "Drizzle") {
        weather.src = "./assets/Drizzle.png";
    } else if (data.weather[0].main == "Rain") {
        weather.src = "./assets/Rain.png";
    } else if (data.weather[0].main == "Snow") {
        weather.src = "./assets/Snow.png";
    } else {
        weather.src = "./assets/Clear.png";
    }
}

const searchWeather = () => {
    let search = document.getElementById("Search").value;
    if (search === "") {
        return;
    }
    getWeather(search);

    document.getElementById("Search").value = "";
};
document.getElementById("Search").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        searchWeather();
    }
});
