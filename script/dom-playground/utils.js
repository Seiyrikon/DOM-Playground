// created an object of that contains different data types to be used as utilities for DomPlayground

const domPlaygroundUtilities = {
    colorArray: [
        "#39FF14",  // Neon Green
        "#FF6AC1",  // Neon Pink
        "#00FFFF",  // Cyan
        "#FFD700",  // Neon Yellow
        "#FF1493",  // Deep Pink
        "#00FF7F",  // Spring Green
        "#FF4500",  // Neon Red-Orange
        "#FFA500",  // Neon Orange
        "#7FFF00",  // Chartreuse
        "#9400D3",  // Dark Violet
        "#FFD1DC",  // Pastel Pink
        "#A9A9A9",  // Dark Gray
        "#87CEEB",  // Sky Blue
        "#FFD700",  // Gold
        "#FFC0CB",  // Pink
        "#98FB98",  // Pale Green
        "#B0E0E6",  // Powder Blue
        "#DDA0DD",  // Plum
        "#ADD8E6",  // Light Blue
        "#F0E68C",
    ],
    getRandomNumber: function randomNumberHandler(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}