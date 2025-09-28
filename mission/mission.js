// Select elements from the DOM
const themeSelector = document.querySelector("#themeSelector");
const logo = document.querySelector("#logo");

// Function to change theme
function changeTheme() {
  if (themeSelector.value === "dark") {
    document.body.classList.add("dark");
    logo.src = "byui-white.png"; // white logo for dark background
  } else {
    document.body.classList.remove("dark");
    logo.src = "byui-blue.png"; // blue logo for light background
  }
}

// Add event listener for change event
themeSelector.addEventListener("change", changeTheme);

// Initialize theme on page load
changeTheme();
