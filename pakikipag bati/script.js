
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const againBtn = document.getElementById("againBtn");
const letterContent = document.getElementById("letterContent");
const clickText = document.getElementById("clickText");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isOpen = false;

// PLAY MUSIC AUTOMATICALLY
async function playMusic() {
    try {
        await bgMusic.play();
        musicBtn.innerHTML = "♫ Pause Music";
    } catch (error) {
        musicBtn.innerHTML = "♫ Tap to Play Music";
    }
}

// OPEN LETTER
function openLetter() {

    if (isOpen) return;

    isOpen = true;

    // PLAY MUSIC WHEN ENVELOPE OPENS
    playMusic();

    envelope.classList.add("open");

    openBtn.style.display = "none";
    clickText.style.display = "none";

    setTimeout(() => {
        letterContent.classList.add("show");

        letterContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 1000);
}

openBtn.addEventListener("click", openLetter);
envelope.addEventListener("click", openLetter);

// READ AGAIN
againBtn.addEventListener("click", () => {

    letterContent.classList.remove("show");
    envelope.classList.remove("open");

    isOpen = false;

    openBtn.style.display = "inline-block";
    clickText.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// MUSIC BUTTON
musicBtn.addEventListener("click", async () => {

    if (bgMusic.paused) {
        await playMusic();
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "♫ Play Music";
    }

});

// FLOATING HEARTS
const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const symbols = ["♡", "♥", "❤", "💕"];

    heart.innerHTML = symbols[
        Math.floor(Math.random() * symbols.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 450);
