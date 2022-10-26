const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const colors = [
  "#f3a683",
  "#f7d794",
  "#778beb",
  "#e77f67",
  "#cf6a87",
  "#786fa6",
  "#f8a5c2",
  "#63cdda",
  "#f19066",
  "#596275",
];

ctx.lineWidth = 2;

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
