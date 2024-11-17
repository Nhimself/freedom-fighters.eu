function updateCountdown() {
    const now = new Date();
    const nextSession = getNextSunday20CET(now);
    console.log("Hello world!");
    // Calculate the difference in milliseconds

    // Convert milliseconds into days, hours, minutes, and seconds
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    // Update the HTML with the calculated values
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Function to get the next Sunday at 20:00 CET
function getNextSunday20CET(currentDate) {
    // Get the current day of the week (0 = Sunday, 6 = Saturday)
    const currentDay = currentDate.getUTCDay();
    
    // Calculate how many days until the next Sunday
    let daysUntilSunday = (7 - currentDay) % 7;

    // If today is Sunday and it's already past 20:00 CET, move to the next Sunday
    if (currentDay === 0 && currentDate.getUTCHours() >= 19) {
        daysUntilSunday = 7; // Move to the next Sunday
    }

    // Create a new Date object for next Sunday and set the time to 20:00 CET (19:00 UTC)
    const nextSunday = new Date(currentDate);
    nextSunday.setUTCDate(currentDate.getUTCDate() + daysUntilSunday);
    nextSunday.setUTCHours(19, 0, 0, 0); // Set time to 19:00 UTC (20:00 CET)

    return nextSunday;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize the countdown on page load
updateCountdown();
