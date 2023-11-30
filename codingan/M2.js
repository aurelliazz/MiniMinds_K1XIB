let currentQuestion = "Mana bentuk segitiga?";
let correctAnswer = "tringle";
let userAnswer = "";

function checkAnswer(gbr6) {
    userAnswer = gbr6;
    document.querySelectorAll(".gbr6").forEach(element => {
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
        alert("jawaban salah Coba lagi. Pilih bentuk segitiga.");
    }
}

function redirectToOtherWebsite() {
    // Ganti URL berikut dengan URL website yang ingin Anda arahkan
    window.location.href = "http://127.0.0.1:5501//codingan/Mbentuk3.html";
}

function resetGame() {
    userAnswer = "";
    document.querySelectorAll(".gbr6").forEach(element => {
        element.classList.remove("selected");
    });
}