function startExperience() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.7;

    music.play().then(() => {
        console.log("Music playing");
    }).catch(() => {
        document.body.addEventListener("click", () => music.play(), { once: true });
    });

    document.getElementById("hiddenMessage").style.display = "block";
}

/* 🌻🌸 Generate Flowers */
const field = document.querySelector(".flower-field");

for (let i = 0; i < 25; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "%";

    const stem = document.createElement("div");
    stem.className = "stem";

    if (Math.random() > 0.5) {
        const sunflower = document.createElement("div");
        sunflower.className = "sunflower";

        for (let j = 0; j < 12; j++) {
            const petal = document.createElement("div");
            petal.className = "petal";
            petal.style.transform = `rotate(${j * 30}deg)`;
            sunflower.appendChild(petal);
        }

        const center = document.createElement("div");
        center.className = "center";
        sunflower.appendChild(center);

        flower.appendChild(sunflower);

    } else {
        const peony = document.createElement("div");
        peony.className = "peony";

        ["layer1","layer2","layer3","layer4"].forEach(layerClass => {
            const layer = document.createElement("div");
            layer.className = `layer ${layerClass}`;
            peony.appendChild(layer);
        });

        flower.appendChild(peony);
    }

    flower.appendChild(stem);
    field.appendChild(flower);
}

/* 🌾 Generate Grass Blades */
const grassField = document.querySelector(".grass-field");

for (let i = 0; i < 120; i++) {
    const blade = document.createElement("div");
    blade.className = "grass-blade";
    blade.style.left = Math.random() * 100 + "%";
    blade.style.animationDuration = 2 + Math.random() * 2 + "s";
    grassField.appendChild(blade);
}

/* ✨ Fireflies */
const fireflies = document.querySelector(".fireflies");

for (let i = 0; i < 40; i++) {
    const light = document.createElement("span");
    light.style.left = Math.random() * 100 + "vw";
    light.style.animationDuration = 5 + Math.random() * 5 + "s";
    fireflies.appendChild(light);
}
