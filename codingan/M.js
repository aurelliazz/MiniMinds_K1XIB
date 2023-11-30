let currentQuestion = "Mana bentuk kotak?";
let correctAnswer = "kotak";
let userAnswer = "";

function checkAnswer(gbr3) {
    userAnswer = gbr3;
    document.querySelectorAll(".gbr3").forEach(element => {
        element.classList.remove("selected");
    });
    document.getElementById(shape).classList.add("selected");
}

function nextQuestion() {
    if (userAnswer === correctAnswer) {
        alert("Selamat! Jawaban kamu benar. Lanjutkan ke level selanjutnya!");
        redirectToOtherWebsite();
        resetGame();
    } else {
        alert("jawaban salah Coba lagi. Pilih bentuk kotak.");
    }
}

function redirectToOtherWebsite() {
    // Ganti URL berikut dengan URL website yang ingin Anda arahkan
    window.location.href = "http://127.0.0.1:5501//codingan/Mbentuk2.html";
}

function resetGame() {
    userAnswer = "";
    document.querySelectorAll(".gbr3").forEach(element => {
        element.classList.remove("selected");
    });
}