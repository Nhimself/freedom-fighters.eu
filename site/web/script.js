function countdownToSunday() {
    const now = new Date();
    let sunday = new Date();
    sunday.setDate(now.getDate() + (7 - now.getDay()));
    sunday.setHours(20, 0, 0, 0);

    if (now.getDay() === 0 && now.getHours() >= 20) {
        sunday.setDate(sunday.getDate() + 7);
    }

    const timeLeft = sunday - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

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

    setTimeout(countdownToSunday, 1000);
}

document.addEventListener("DOMContentLoaded", countdownToSunday);


// Toggle the mobile menu when the burger icon is clicked
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
