const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city) {
    const Api_Key = "c02c7899ca1733734f876cbbf36f1027";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`;

    try {
        const weatherData = await fetch(`${url}`).then(response => response.json())
        console.log(weatherData);


        if (weatherData.cod === `404`) {
            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            console.log("Error");
            return;
        }
        else {
            location_not_found.style.display = "none";
            weather_body.style.display = "flex";
        }


        temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
        description.innerHTML = `${weatherData.weather[0].description}`;
        humidity.innerHTML = `${weatherData.main.humidity}%`;
        wind_speed.innerHTML = `${weatherData.wind.speed}Km/H`;

        switch (weatherData.weather[0].main) {
            case 'Clouds':
                weather_img.src = "Img/cloud.png"
                break;
            case 'Clear':
                weather_img.src = "Img/clear.png"
                break;
            case 'Mist':
                weather_img.src = "Img/mist.png"
                break;
            case 'Rain':
                weather_img.src = "Img/rain.png"
                break;
            case 'Snow':
                weather_img.src = "Img/snow.png"
                break;

            default:
                weather_img.src = "Img/UnKnow.png"
                break;
        }

    } catch (error) {
        console.error('Error fetching the weather data:', error);
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
})
    

    


   








