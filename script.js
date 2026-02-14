function startExperience() {
    document.getElementById("hiddenMessage").style.display = "block";
    document.getElementById("bgMusic").play().catch(() => {});
}

/* Generate flowers */
const field = document.querySelector(".flower-field");

for (let i = 0; i < 35; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "%";
    flower.style.animationDuration = 3 + Math.random() * 4 + "s";

    const bloom = document.createElement("div");
    bloom.className = Math.random() > 0.5 ? "peony" : "sunflower";

    const stem = document.createElement("div");
    stem.className = "stem";

    flower.appendChild(bloom);
    flower.appendChild(stem);
    field.appendChild(flower);
}

/* Fireflies */
const fireflies = document.querySelector(".fireflies");

for (let i = 0; i < 40; i++) {
    const light = document.createElement("span");
    light.style.left = Math.random() * 100 + "vw";
    light.style.animationDuration = 5 + Math.random() * 5 + "s";
    fireflies.appendChild(light);
}
