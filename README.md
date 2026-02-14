<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For My Sunshine 🌻</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<audio id="bgMusic" loop>
    <source src="music.mp3" type="audio/mp3">
</audio>

<!-- Animated Sunset Sky -->
<div class="sky"></div>

<!-- Fireflies -->
<div class="fireflies"></div>

<!-- Flowers Field -->
<div class="flower-field"></div>

<!-- Center Card -->
<div class="card">
    <h1>For <span id="nameDisplay">My Love</span> 💛</h1>
    <p>
        My love grows like these flowers — gently, beautifully, endlessly.
    </p>
    <button onclick="startExperience()">Start Our Sunset</button>
    <div id="hiddenMessage" class="hidden">
        🌅 You are my sunshine, my peace, my forever.
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
