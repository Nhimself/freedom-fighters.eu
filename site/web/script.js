function countdownToSunday() {
    const now = new Date();
    let sunday = new Date();
    sunday.setDate(now.getDate() + (7 - now.getDay())); // Set the date to the next Sunday
    sunday.setHours(20, 0, 0, 0); // Set the time to 20:00 CET on Sunday

    // If it's already past Sunday 20:00, set the next Sunday
    if (now.getDay() === 0 && now.getHours() >= 20) {
        sunday.setDate(sunday.getDate() + 7);
    }

    const timeLeft = sunday - now;
    const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0'); // Pad single digits
    const hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'); // Pad single digits
    const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'); // Pad single digits
    const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0'); // Pad single digits

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
