/**
 * Squid Game Rewind 2.0 - Countdown Script
 * Target: February 10, 2026
 */

// Compute the next Feb 10, 6 PM automatically (advances to next year if already passed)
const getNextEventTime = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let target = new Date(currentYear, 1, 10, 18, 0, 0, 0); // Month is 0-indexed (1 = Feb)
    if (target.getTime() <= now.getTime()) {
        target = new Date(currentYear + 1, 1, 10, 18, 0, 0, 0);
    }
    return target.getTime();
};

const countDownDate = getNextEventTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const clampToZero = (value) => Math.max(0, value);
    const days = clampToZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = clampToZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = clampToZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = clampToZero(Math.floor((distance % (1000 * 60)) / 1000));

    // Output the results in the elements with id="days", "hours", etc.
    // The "ternary" operator ( ? :) ensures we always have two digits (e.g., 09 instead of 9)
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // If the count down is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown-container").innerHTML = "<span class='game-over'>GAME STARTED</span>";
        
        // Optional: Change the button text to "JOIN NOW" when timer ends
        document.querySelector(".register-btn").innerText = "JOIN NOW";
    }
}, 1000);