const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let isDrawing = false;
let path = [];

// Load gambar PNG segitiga sebagai latar belakang
const kotakImage = new Image();
kotakImage.src = 'Tkotak.png';

// Tentukan ukuran segitiga sesuai dengan canvas
kotakImage.width = canvas.width;
kotakImage.height = canvas.height;

kotakImage.onload = function () {
    context.drawImage(kotakImage, 0, 0, canvas.width, canvas.height);
};

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
    path = [];
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    fillSqureWithBlue();
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        draw(event);
    }
});

function draw(event) {
    const point = {
        x: event.offsetX,
        y: event.offsetY
    };
    path.push(point);
    context.fillStyle = 'black';
    context.fillRect(point.x, point.y, 5, 5);
}

function fillSqureWithBlue() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(kotakImage, 0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
        context.lineTo(path[i].x, path[i].y);
    }
    context.closePath();

    context.fillStyle = 'blue';
    context.fill();

    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('nextButton').addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5501/codingan/Gbentuk2.html'; // Ganti dengan URL tujuan Anda
    });
}

function changeToSqure() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(kotakImage, 0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(100, 300);
    context.lineTo(250, 300);
    context.lineTo(175, 100);
    context.closePath();

    context.fillStyle = 'blue';
    context.fill();
}
