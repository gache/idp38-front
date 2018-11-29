const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'royalblue';
ctx.lineWidth = 5;

ctx.beginPath();
ctx.rect(50, 50, 100, 100);
ctx.fill();

ctx.beginPath();
ctx.arc(250, 200, 80, 0, Math.PI * 1, false);
ctx.closePath();
ctx.stroke();
ctx.fill();

const h = canvas.height;
const w = canvas.width;

// Triangle
ctx.beginPath();
ctx.moveTo(440, h/2-40);
ctx.lineTo(400, h/2+40);
ctx.lineTo(480, h/2+40);
ctx.closePath();
ctx.stroke();

// Pacman
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(600, h/2, 42, 0.6, Math.PI * 1.8, false);
ctx.lineTo(600, h/2);
ctx.closePath();
ctx.stroke();
ctx.fill();