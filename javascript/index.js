let api_key = "c9c0ae0ddbe7383a29f56e4338a76c8e";

let result = document.getElementById("search");
let temparture = document.getElementById("temp-value");
let city = document.getElementById("city-value");
let temparature_icon = document.getElementById("temp-icon");
let bgc = document.getElementById("bgc-img");
let wind_speed = document.getElementById("wind-speed");
let humidity_val = document.getElementById("humidity");
let pressure_val = document.getElementById("pressure");
let image_background = document.getElementById("image-back");
let weather_info = document.getElementById("weather-type");
let date_val = document.getElementById("date-val");
let d = new Date();
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const bgc_pics = [
  "./pictures/cloudy.jpg",
  "./pictures/sunny.jpg",
  "./pictures/rainny.jpg",
  "./pictures/thunderstorm.jpg",
  "./pictures/Haze.jpg",
  "./pictures/snow.jpg",
];
const image_bgc = [
  "/pictures/blur_cloudy.jpg",
  "/pictures/blur_sunny.jpg",
  "/pictures/blur_rainny.jpg",
  "/pictures/blur_thunderstorm.jpg",
  "/pictures/blur_haze.jpg",
  "/pictures/blur_snow.jpg",
];

async function getinfo() {
  const api_url = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${result.value}&appid=${api_key}&units=metric`
  )
    .then((data) => data.json())
    .then((final_data) => {
      temparture.textContent = final_data.main.temp + "°C";
      city.textContent = result.value.toUpperCase();
      wind_speed.textContent = `wind-speed: ${final_data.wind.speed} Km/h`;
      humidity_val.textContent = `Humidity: ${final_data.main.humidity}%`;
      pressure_val.textContent = `Pressure: ${final_data.main.pressure} hpa`;
      date_val.textContent = d.getDate() +" " + month[d.getMonth()];

      if (final_data.weather[0].main == "Clouds") {
        temparature_icon.className = "bx bx-cloud";
        bgc.src = bgc_pics[0];
        image_background.style.backgroundImage = `url(${image_bgc[0]})`;
        weather_info.textContent = final_data.weather[0].main;
      } else if (final_data.weather[0].main == "Clear") {
        temparature_icon.className = "fa fa-sun-o";
        image_background.style.backgroundImage = `url(${image_bgc[1]})`;
        bgc.src = bgc_pics[1];
        weather_info.textContent = final_data.weather[0].main;
      } else if (final_data.weather[0].main == "Rain") {
        temparature_icon.className = "bx bx-cloud-rain ";
        image_background.style.backgroundImage = `url(${image_bgc[2]})`;
        bgc.src = bgc_pics[2];
        weather_info.textContent = final_data.weather[0].main;
      } else if (final_data.weather[0].main == "Thunderstorm") {
        temparature_icon.className = "bx bx-cloud-lightning";
        image_background.style.backgroundImage = `url(${image_bgc[3]})`;
        bgc.src = bgc_pics[3];
        weather_info.textContent = final_data.weather[0].main;
      } else if (final_data.weather[0].main == "Haze") {
        temparature_icon.className = "bx bx-cloud-drizzle";
        image_background.style.backgroundImage = `url(${image_bgc[4]})`;
        bgc.src = bgc_pics[4];
        weather_info.textContent = final_data.weather[0].main;
      } else if (
        final_data.weather[0].icon == "13d" ||
        final_data.weather[0].icon == "13n"
      ) {
        temparature_icon.className = "bx bx-cloud-snow";
        image_background.style.backgroundImage = `url(${image_bgc[5]})`;
        bgc.src = bgc_pics[5];
        weather_info.textContent = final_data.weather[0].main;
      }
      console.log(final_data);
    });
}
getinfo();
function add() {
  getinfo();
}
