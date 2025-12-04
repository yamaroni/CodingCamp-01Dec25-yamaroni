/// Initial welcome message prompt
welcomeMessage();

/// Function to display welcome message
function welcomeMessage() {
    /// Prompt user for their name
    let userResponse = prompt("Welcome to Our Website! Input your name:");

    /// If user cancels or inputs empty string, default to "Guest"
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    /// Display personalized welcome message on the webpage
    document.getElementById("welcome-speech").innerHTML = "Hello, " + userResponse + "! Welcome to Our Website!";
}

/// Form validation function (currently empty)
function validateForm() { }