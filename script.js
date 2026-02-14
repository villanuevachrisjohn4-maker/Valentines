function openEnvelope() {
    document.querySelector(".envelope").classList.add("open");
    document.querySelector(".letter").classList.remove("hidden");
    document.querySelector(".envelope-wrapper").style.display = "none";
    document.getElementById("bgMusic").play();
}

function revealMessage() {
    document.getElementById("hiddenMessage").classList.toggle("hidden");
}

/* Generate floating petals */
const petalsContainer = document.querySelector(".petals");
for (let i = 0; i < 20; i++) {
    const petal = document.createElement("span");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petalsContainer.appendChild(petal);
}

/* Generate falling hearts */
const heartsContainer = document.querySelector(".hearts");
for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    heartsContainer.appendChild(heart);
}
