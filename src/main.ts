import "./style.css";
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

const setupCanvas = () => {
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    if (!ctx) return;

    animate(ctx);
};
const playerImage = new Image();
playerImage.src = "assets/shadow_dog.png";
const sw = 575;
const sh = 523;
const dx = 0;
const dy = 0;
const dw = 575;
const dh = 523;
let fx = 0;
let fy = 4;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimatios = [];
const animationStates = [
    {
        name: "idle",
        frames: 7,
    },
    {
        name: "jump",
        frames: 7,
    },
];

function animate(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % 11;
    fx = sw * position;
    ctx.drawImage(playerImage, fx, fy * sh, sw, sh, dx, dy, dw, dh);
    gameFrame++;
    requestAnimationFrame(() => animate(ctx));
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <canvas id="canvas1"></canvas>
  </div>
`;

setupCanvas();
