const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form-input");
const cityElement = document.querySelector(".weather-city");

function handleSearch(event) {
  // Stop the form from reloading the page
  event.preventDefault();

  // Remove extra spaces from the start and end
  const city = searchInput.value.trim();

  // Ignore input that is only spaces
  if (!city) {
    return;
  }

  // Capitalise the first letter of each word: "cape town" -> "Cape Town"
  cityElement.textContent = city
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Clear the search box
  searchForm.reset();
}

searchForm.addEventListener("submit", handleSearch);
