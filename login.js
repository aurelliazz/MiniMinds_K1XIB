const recordButton = document.getElementById("record-button");
const resultTextarea = document.getElementById("result");

let recognizing = false;
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'id-ID';

let timeout;

recordButton.addEventListener("click", () => {
  if (!recognizing) {
    recognition.start();
    recognizing = true;
    recordButton.textContent = "Stop Rekaman";
    timeout = setTimeout(() => {
      recognition.stop();
    }, 5000); // Menghentikan rekaman setelah 5 detik tanpa suara
  } else {
    recognition.stop();
    recognizing = false;
    recordButton.textContent = "Mulai Rekaman";
    clearTimeout(timeout);
  }
});

recognition.onresult = function(event) {
  let interimTranscript = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      resultTextarea.placeholder = transcript; // Mengubah placeholder dengan hasil akhir
      clearTimeout(timeout); // Reset timeout jika ada hasil akhir
    } else {
      interimTranscript += transcript;
    }
  }
  if (interimTranscript !== '') {
    resultTextarea.placeholder = interimTranscript; // Mengubah placeholder dengan hasil sementara
  }
};

recognition.onend = function() {
  recognizing = false;
  recordButton.textContent = "Mulai Rekaman";
};

// Simpan elemen audio dalam variabel
const backgroundAudio = document.getElementById("background-audio");

// Simpan elemen loading screen dalam variabel
const loadingScreen = document.querySelector(".loading-screen");

// Fungsi untuk memainkan audio dan menghapus loading screen
function playBackgroundAudio() {
    backgroundAudio.play(); // Memulai pemutaran audio
    loadingScreen.style.display = "none"; // Menghapus elemen loading screen
}

// Tambahkan penundaan selama 5 detik (5000 milidetik) sebelum memanggil fungsi playBackgroundAudio
setTimeout(playBackgroundAudio, 5000);

// Fungsi untuk memuat audio
function loadBackgroundAudio() {
    backgroundAudio.load();
}

// Panggil fungsi untuk memuat audio
loadBackgroundAudio();




