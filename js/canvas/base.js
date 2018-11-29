const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'royalblue';
ctx.lineWidth = 5;

const h = canvas.height;
const w = canvas.width;

let startAngle = 42;
let direction = -1;

setInterval(function () {
    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    ctx.rect(50, 50, 100, 100);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 200, 80, 0, Math.PI * 1, false);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Triangle
    ctx.beginPath();
    ctx.moveTo(440, h / 2 - 40);
    ctx.lineTo(400, h / 2 + 40);
    ctx.lineTo(480, h / 2 + 40);
    ctx.closePath();
    ctx.stroke();

    if (startAngle <= 0) {
        direction = 1;
    } else if (startAngle >= 42) {
        direction = -1;
    }

    startAngle += (2 * direction);

    // Pacman
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(600, h / 2, 42, (Math.PI / 180) * startAngle, (Math.PI / 180) * (360 - startAngle), false);
    ctx.lineTo(600, h / 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}, 1000 / 60);
