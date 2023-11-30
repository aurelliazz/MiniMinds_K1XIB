document.addEventListener("DOMContentLoaded", function () {
    const backgroundAudio = document.getElementById("background-audio");

    // Fungsi untuk memainkan audio
    function playBackgroundAudio() {
        backgroundAudio.currentTime = 0; // Mengatur waktu audio ke awal
        backgroundAudio.play(); // Memulai ulang audio
    }

    // Memanggil fungsi untuk memainkan audio saat halaman dimuat
    playBackgroundAudio();

    // Memanggil fungsi untuk memainkan audio lagi saat halaman direfresh
    window.addEventListener("beforeunload", playBackgroundAudio);
});
