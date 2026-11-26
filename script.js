function updateWeather(response) {
  const temperatureElement = document.querySelector(".weather-temperature");
  const cityElement = document.querySelector(".weather-city");

  let temperature = response.data.temperature.current;
  let city = response.data.city;

  // Update temperature
  temperatureElement.textContent = Math.round(temperature);

  // Capitalise the first letter of each word
  cityElement.textContent = city
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function searchCity(city) {
  // Separation of concerns
  const apiKey = "025oa25fb8b64d298f49aet1b48af332";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${encodeURIComponent(city)}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateWeather);
}

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form-input");

function handleSearch(event) {
  // Stop the form from reloading the page
  event.preventDefault();

  // Remove unnecessary spaces
  const city = searchInput.value.trim();

  // Ignore empty input
  if (!city) {
    return;
  }

  // Retrieve weather information
  searchCity(city);

  // Clear the search box
  searchForm.reset();
}

searchForm.addEventListener("submit", handleSearch);

// Default city
searchCity("Paris");
