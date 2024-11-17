function countdownToSunday() {
    const now = new Date();
    let sunday = new Date();
    
    // Set the date to the next Sunday
    sunday.setDate(now.getDate() + (7 - now.getDay()) % 7); // The % 7 handles when today is Sunday
    sunday.setHours(20, 0, 0, 0); // Set the time to 20:00 CET (note: CEST will be considered later)

    // If today is Sunday and it's already past 20:00, set the next Sunday
    if (now.getDay() === 0 && now.getHours() >= 20) {
        sunday.setDate(sunday.getDate() + 7); // Move to next Sunday
    }

    // Adjust the time for daylight saving time (CEST vs CET)
    const timeZoneOffset = now.getTimezoneOffset(); // Get the browser's local time offset from UTC in minutes
    const isDST = (timeZoneOffset < 60); // If the offset is less than 60 minutes, we're in CEST
    const targetTimeZoneOffset = isDST ? 2 * 60 : 1 * 60; // 2 hours for CEST, 1 hour for CET
    sunday.setMinutes(sunday.getMinutes() - (sunday.getTimezoneOffset() - targetTimeZoneOffset)); // Adjust the time for CET or CEST

    // Calculate the time remaining
    const timeRemaining = sunday - now;

    const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');

    // Update the countdown display
    document.getElementById("countdown").innerHTML = `
        <div class="countdown-item">
            <div class="number">${days}</div>
            <div class="label">days</div>
        </div>
        <div class="countdown-item">
            <div class="number">${hours}</div>
            <div class="label">hours</div>
        </div>
        <div class="countdown-item">
            <div class="number">${minutes}</div>
            <div class="label">minutes</div>
        </div>
        <div class="countdown-item">
            <div class="number">${seconds}</div>
            <div class="label">seconds</div>
        </div>`;

    // Update the countdown every second
    setTimeout(countdownToSunday, 1000);
}

document.addEventListener("DOMContentLoaded", countdownToSunday);
