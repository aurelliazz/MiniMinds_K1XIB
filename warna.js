const colors = ["Merah", "Hijau", "Biru", "Kuning", "Ungu", "Oranye", "Pink", "Coklat"];
const colorQuestion = document.getElementById("color-question");
const colorCard = document.getElementById("color-card");
const colorOptions = document.getElementById("color-options");
const guessButton = document.getElementById("guess-button"); // Tambahkan ini

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateColorOptions() {
    // Bersihkan pilihan warna sebelumnya
    colorOptions.innerHTML = "";

    // Acak urutan warna
    const shuffledColors = [...colors];
    shuffleArray(shuffledColors);

    // Tambahkan pilihan warna
    shuffledColors.forEach(color => {
        const colorOption = document.createElement("div");
        colorOption.classList.add("color-option");
        colorOption.style.backgroundColor = color.toLowerCase();
        colorOption.addEventListener("click", () => {
            const guessedColor = color.toLowerCase();
            if (guessedColor === currentColor.toLowerCase()) {
                alert("Benar! Warna yang Anda tebak adalah " + currentColor + "!");
                generateNewColor();
            } else {
                alert("Salah. Warna yang benar adalah " + currentColor + ".");
            }
        });
        colorOptions.appendChild(colorOption);
    });
}

function generateNewColor() {
    currentColor = getRandomColor();
    colorCard.style.backgroundColor = currentColor.toLowerCase();
    colorQuestion.textContent = `Warna apa yang Anda lihat?`;
}

let currentColor;

guessButton.addEventListener("click", () => {
    generateNewColor();
    generateColorOptions();
});

// Pertama kali memulai permainan
generateNewColor();
generateColorOptions();
