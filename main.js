const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops = [];

// Create raindrops
for (let i = 0; i < 300; i++) {
  raindrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 2
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'lightblue';
  ctx.lineWidth = 2;
  ctx.beginPath();

  raindrops.forEach(drop => {
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    drop.y += drop.speed; // Move drop down
    if (drop.y > canvas.height) drop.y = -drop.length; // Reset if out of screen
  });

  ctx.stroke();
  requestAnimationFrame(drawRain);
}

drawRain();

// Adjust canvas on resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});