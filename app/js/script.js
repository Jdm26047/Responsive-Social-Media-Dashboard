console.log('Hello') ;

/* 
The first time the page is loaded, the color mode set on the preference 
is used and set as 'default' in the local storage. 
Changing the default preferences works the same way as changing the 
color mode using the buttons, if the page is loaded.
When the page is reloaded, whatever is the value set on the local storage
has precedence over the values in the preference. If the preference
changed after the page was visited - and the page is not loaded - 
the last value saved on the local storage is loaded. 
*/

// Retrieve the dark and light mode buttons from the DOM
var darkButton = document.getElementById("dark"),
    lightButton = document.getElementById("light");

// Function to set dark mode
var setDarkMode = function() {
    document.querySelector("body").classList = "dark"; // Apply dark class to body
    localStorage.setItem("colorMode", "dark"); // Store preference in local storage
};

// Function to set light mode
var setLightMode = function() {
    document.querySelector("body").classList = "light"; // Apply light class to body
    localStorage.setItem("colorMode", "light"); // Store preference in local storage
};

// Function to get color mode from local storage
var colorModeFromLocalStorage = function() {
    return localStorage.getItem("colorMode");
};

// Function to get color mode from user preferences
var colorModeFromPreferences = function() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

// Function to load and update color mode based on stored preference or system preference
var loadAndUpdateColor = function() {
    if ("dark" == (colorModeFromLocalStorage() || colorModeFromPreferences())) {
        darkButton.click(); // Simulate click on dark button
    } else {
        lightButton.click(); // Simulate click on light button
    }
};

// Select all radio buttons for toggling
var radioButtons = document.querySelectorAll(".toggle__wrapper input");

// Add event listeners to each radio button
radioButtons.forEach(function(e) {
    e.addEventListener("click", function(e) {
        darkButton.checked ? setDarkMode() : setLightMode(); // Set mode based on button state
    });
});

// Listen for changes in the user's color scheme preference
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(e) {
    e.matches ? darkButton.click() : lightButton.click(); // Update mode based on preference change
});

// Load and update the color mode on page load
loadAndUpdateColor();
