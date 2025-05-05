# Functional Requirements and Notes
Consider Forums and Blogs for research

# Light/Dark Mode toggle -- takes system pref by default, but can override with toggle

HTML Markup to use (accessible) -- [https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/]

- Use fieldset, legend, radio inputs

Toggle Research [https://www.sarasoueidan.com/blog/toggle-switch-design/#live-example]

- RECONSIDER the use of legend !
[https://stackoverflow.com/questions/52350191/is-a-legend-element-a-grid-item-if-a-fieldsets-display-is-grid]

Switching betweeen light/dark modes via JS and prefers-colors-scheme: Media Query -- [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/]prefers-color-scheme

https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode/
https://www.javascripttutorial.net/javascript-dom/javascript-getcomputedstyle/
https://piccalil.li/blog/get-css-custom-property-value-with-javascript/
https://codepen.io/piccalilli/pen/VOELMZ


Switching betweeen light/dark modes via CSS -- [https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8]

Three option toggle: light/dark/system pref -- [https://codepen.io/renddrew/pen/bRomab] 
- Best info for toggle button and accessibility [https://www.sarasoueidan.com/blog/toggle-switch-design/#live-example]

CSS Variables (custom properties) -- [https://css-tricks.com/updating-a-css-variable-with-javascript/]

TEST [https://developer.mozilla.org/en-US/play]

Research 
prefers-colors-scheme Media Query
^this is already built into browsers


Accessibility 

- Use correct Heading tags
- Screen reader only text for card titles/username
- Be mindful of appropriate HTML tags for screenreaders, considerate accessibility 

- Use correct heading tags
- Screenreader-only text for card titles/username -- https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/

NDVA hotkeys:
https://webaim.org/resources/shortcuts/nvda

Resources [https://scottaohara.github.io/a11y_styled_form_controls/]

https://dequeuniversity.com/rules/axe/4.10/label?application=axeAPI


https://pauledenburg.com/gulp-error-did-you-forget-to-signal-async-completion/

https://www.figma.com/design/zFdSARQgNbZAvHxrOMNWn7/social-media-dashboard-with-theme-switcher?node-id=0-855&t=FuCxTmbqdWuscFoj-0

READ for - Z-Index and Position Properties in relation to Radio Buttons layering [https://duckduckgo.com/?q=what+is+the+z+index&ia=web]

[https://philipwalton.com/articles/what-no-one-told-you-about-z-index/]

Review HTML fielset/legend spec [https://github.com/w3c/csswg-drafts/issues/3094] -- Generated spec at https://whatpr 


# Implementing a Dark/Light Mode Toggle in JavaScript - AI Tool 
[https://zzzcode.ai/code-explain?id=1fdb64dc-fd08-4c3c-b9a0-332a4f25c747]

Introduction
In today's web development landscape, providing users with a customizable experience is paramount. One popular feature is the ability to toggle between dark and light modes. This article will delve into a JavaScript implementation that allows users to switch between these two modes seamlessly. We will explore the code structure, key concepts, and provide practical examples to illustrate how this functionality works.

# Key Concepts
Before we dive into the code, let's outline some key concepts that are essential for understanding the implementation:

- Local Storage: 
This is a web storage feature that allows you to store data in the user's browser. It persists even after the browser is closed, making it ideal for saving user preferences like color schemes.

- Media Queries: 
These are used in CSS to apply styles based on the user's device characteristics, such as screen size or color scheme preferences.

- Event Listeners:
 These are functions that wait for specific events to occur, such as a user clicking a button, and then execute a defined action in response.

# Code Structure
The provided code is structured to handle the toggling of dark and light modes effectively. It utilizes event listeners to respond to user interactions and media query changes. Here’s a breakdown of the main components:

- Button Elements: 
The code retrieves the dark and light mode buttons from the DOM.

- Mode Functions: 
Functions are defined to set the dark or light mode and to retrieve the current mode from local storage or user preferences.

- Event Listeners: 
The code listens for clicks on the toggle buttons and changes in the user's color scheme preference.

- Code Here is the provided code with comments to explain each section:
language-javascript

"use strict";

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

--

# Explanation of the Code
- Initialization: The code begins by retrieving the dark and light buttons from the DOM. This allows the script to manipulate these elements directly.

- Mode Functions: 
The setDarkMode and setLightMode functions change the class of the body element to either "dark" or "light" and store the user's preference in local storage.

- Preference Retrieval: 
The functions colorModeFromLocalStorage and colorModeFromPreferences are responsible for checking the stored preference and the user's system preference, respectively.

- Loading Preferences: 
The loadAndUpdateColor function checks the current mode and simulates a click on the appropriate button to apply the correct mode when the page loads.

- Event Handling: 
The code adds event listeners to the radio buttons to change the mode when clicked. It also listens for changes in the user's system preference, allowing for dynamic updates.

# Conclusion
The implementation of a dark/light mode toggle in JavaScript enhances user experience by allowing customization based on personal preferences. By utilizing local storage, media queries, and event listeners, developers can create a responsive and user-friendly interface. This code serves as a solid foundation for integrating dark and light modes into any web application, ensuring that users can enjoy their preferred viewing experience.
