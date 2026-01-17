/**
 * Squid Game Rewind 2.0 - Countdown Script
 * Target: February 10, 2026
 */

// Set the date we're counting down to
const countDownDate = new Date("Feb 10, 2026 18:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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