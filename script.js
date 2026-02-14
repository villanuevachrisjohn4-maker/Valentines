function startExperience() {
    document.getElementById("hiddenMessage").style.display = "block";
    
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {
        console.log("User interaction required for music.");
    });
}

/* Generate floating petals */
const petalsContainer = document.querySelector(".petals");
for (let i = 0; i < 25; i++) {
    const petal = document.createElement("span");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petalsContainer.appendChild(petal);
}

/* Generate falling hearts */
const heartsContainer = document.querySelector(".hearts");
for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    heartsContainer.appendChild(heart);
}
