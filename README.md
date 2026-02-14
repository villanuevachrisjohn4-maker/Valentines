<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Valentine’s Day 💖</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<audio id="bgMusic" loop>
    <source src="music.mp3" type="audio/mp3">
</audio>

<!-- Falling Hearts -->
<div class="hearts"></div>

<!-- Floating Petals -->
<div class="petals"></div>

<!-- Envelope -->
<div class="envelope-wrapper" onclick="openEnvelope()">
    <div class="envelope">
        <div class="flap"></div>
        <div class="glow"></div>
    </div>
</div>

<!-- Letter -->
<div class="letter hidden">
    <h1>Happy Valentine’s Day 💖</h1>
    <p>
        Everything i feel for you is genuine,
        my love for you continues to grow every single day.
    </p>
    <p>
        You're the reason behind of my secret smiles everyday,
        and you'll always have me, I love you always.
    </p>
    <p class="signature">To my Yellow 🌻</p>
    <button onclick="revealMessage()">Open My Heart</button>
</div>

<div id="hiddenMessage" class="hidden-message">
    💛 You are my sunshine, my happiness, my always.
</div>

<!-- Flowers -->
<div class="flowers">
    <div class="sunflower"></div>
    <div class="peony peony1"></div>
    <div class="peony peony2"></div>
</div>

<script src="script.js"></script>
</body>
</html>
