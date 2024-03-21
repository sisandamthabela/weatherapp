function updateTime() {
  currentTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let time = `${hour}:${minute.toString().padStart(2, "0")}`;
  formattedTime = `${day} ${time}`;

  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = formattedTime;
}

setInterval(updateTime, 1000);

//weather api

function displayTemperature(response) {
  console.log(response);
  let currentCity = document.querySelector("#current-city");
  let city = response.data.city;
  currentCity.innerHTML = `${city}`;
  let temperature = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector("#current-temperature-value");
  currentTemp.innerHTML = `${temperature}`;
  let description = response.data.condition.description;
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = `${description}`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;

  let key = "7a60d36485to64ac27f9bab0d1cc4ca3";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(url).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
