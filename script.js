document.addEventListener("DOMContentLoaded", function() {
    // Get the "Get Started" button element
    var getStartedButton = document.querySelector("#hero .btn");

    // Add event listener to the "Get Started" button
    getStartedButton.addEventListener("click", function() {
        // Prompt the user for their budget
        var budget = prompt("Please enter your budget:");

        // Validate the user input
        if (budget !== null && budget !== "") {
            // Store the budget in localStorage for use in the next window
            localStorage.setItem("budget", parseFloat(budget).toFixed(2));

            // Redirect to the next window
            window.location.href = "TripPlanner.html"; // Replace "next-page.html" with the actual URL of the next page
        } else {
            // Display a message if the user cancels or enters an empty value
            alert("You didn't enter a valid budget. Please try again.");
        }
    });
});