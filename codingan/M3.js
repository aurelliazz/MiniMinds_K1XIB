let currentQuestion = "Mana bentuk lingkaran?";
let correctAnswer = "circle";
let userAnswer = "";

function checkAnswer(gbr8) {
    userAnswer = gbr8;
    document.querySelectorAll(".gbr8").forEach(element => {
        element.classList.remove("selected");
    });
    document.getElementById(shape).classList.add("selected");
}

function nextQuestion() {
    if (userAnswer === correctAnswer) {
        alert("Selamat! kamu telah menyelesaikan stage ini!!");
        resetGame();
    } else {
        alert("jawaban salah Coba lagi. Pilih bentuk lingkaran.");
    }
}


function redirectToOtherWebsite() {
    // Ganti URL berikut dengan URL website yang ingin Anda arahkan
    window.location.href = "http://127.0.0.1:5501/Owarna4.html";
}

function resetGame() {
    userAnswer = "";
    document.querySelectorAll(".gbr8").forEach(element => {
        element.classList.remove("selected");
    });
}