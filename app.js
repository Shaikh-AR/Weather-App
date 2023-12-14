const apiKey = "b7936ccc2bcf795eda7dbd29735a888b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const units = "&units=metric";

// const mainUrl ="https://api.openweathermap.org/data/2.5/weather?q=germany&appid=b7936ccc2bcf795eda7dbd29735a888b&units=metric"
var searchBox = document.querySelector(".search input");
var searchBtn = document.getElementById("search-btn")
var weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  // const response = await fetch(apiUrl + city + `&appid=?${apiKey}` + units);
  const response = await fetch(apiUrl + city + "&appid=" + apiKey + units);
  // const response = await fetch (mainUrl);
  // const data = await response.json();
  // console.log(data);

  if (response.status == 404) {
    console.log("error");
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
}else{
  console.log("else block")
}
// checkWeather();
