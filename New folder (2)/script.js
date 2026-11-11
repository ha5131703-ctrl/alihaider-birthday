
const dateScreen = document.getElementById("dateScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const birthdayDate = document.getElementById("birthdayDate");
const nextBtn = document.getElementById("nextBtn");
const error = document.getElementById("error");

const balloons = document.getElementById("balloons");
const confetti = document.getElementById("confetti");

nextBtn.addEventListener("click", function () {

    const selectedDate = birthdayDate.value;

    if (!selectedDate) {
        error.textContent = "Please select your date first! ❤️";
        return;
    }

    const date = new Date(selectedDate + "T00:00:00");

    if (isNaN(date.getTime()) || date > new Date()) {
        error.textContent = "Please select a valid date!";
        return;
    }

    error.textContent = "";

    dateScreen.classList.remove("active");

    setTimeout(() => {
        birthdayScreen.classList.add("active");

        startCelebration();
    }, 500);
});

function startCelebration() {

    balloons.innerHTML = "";
    confetti.innerHTML = "";

    // Floating balloons
    const balloonEmojis = ["🎈", "🎈", "💖", "🎈", "🎉"];

    for (let i = 0; i < 22; i++) {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.textContent =
            balloonEmojis[
                Math.floor(Math.random() * balloonEmojis.length)
            ];

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        balloon.style.animationDelay =
            (Math.random() * 4) + "s";

        balloons.appendChild(balloon);

        balloon.addEventListener("animationend", () => {
            balloon.remove();
        });
    }

    // Colorful confetti
    const colors = [
        "#ff4eae",
        "#ffe066",
        "#a64dff",
        "#56eaff",
        "#ffffff",
        "#ff775e"
    ];

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        piece.style.animationDelay =
            (Math.random() * 3) + "s";

        confetti.appendChild(piece);

        piece.addEventListener("animationend", () => {
            piece.remove();
        });
    }
}

// Celebrate again
document.getElementById("replayBtn")
    .addEventListener("click", startCelebration);