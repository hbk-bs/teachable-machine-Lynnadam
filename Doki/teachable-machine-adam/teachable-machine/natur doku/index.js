let video;
const cx = 300;
const cy = 300;
const r = 120;

function preload() {
  video = createVideo("https://hbk-bs.github.io/the-archives-Lynnadam/assets/images/t.mp4");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  video.hide();
  video.loop();
  video.volume(0);
}

function draw() {
  background(250);


  drawVideoInsideLens(cx, cy, r);


  drawLens(cx, cy, r);
  drawHandle(cx, cy, r);
  drawDetails(cx, cy, r);
}

function drawVideoInsideLens(x, y, radius) {
  push();

  const innerRadius = radius - 8;


  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(x, y, innerRadius, 0, TWO_PI);
  drawingContext.clip();


  const vidAspect = video.width / video.height;
  const circleDiameter = innerRadius * 2;
  let w, h;

  if (vidAspect > 1) {
   
    w = circleDiameter * vidAspect;
    h = circleDiameter;
  } else {
  
    w = circleDiameter;
    h = circleDiameter / vidAspect;
  }

  const vx = x - w / 2;
  const vy = y - h / 2;

  image(video, vx, vy, w, h);

  drawingContext.restore();
  pop();
}

function drawLens(x, y, radius) {
  stroke(40);
  strokeWeight(2);
  noFill();
  for (let i = 0; i < 100; i++) {
    const off = random(-1.5, 1.5);
    ellipse(x + off, y + off, radius * 2 + random(-1, 1));
  }

  stroke(40);
  strokeWeight(1.5);
  for (let i = 0; i < 60; i++) {
    const off = random(-1.2, 1.2);
    ellipse(x + off, y + off, (radius - 8) * 2 + random(-1.5, 1.5));
  }

  noStroke();
  fill(255, 255, 255, 40);
  ellipse(x - radius / 3, y - radius / 3, radius / 1.5);
}

function drawHandle(x, y, radius) {
  const angle = 45;
  const len = 100;

  const x1 = x + cos(angle) * radius;
  const y1 = y + sin(angle) * radius;
  const x2 = x1 + cos(angle) * len;
  const y2 = y1 + sin(angle) * len;

  stroke(30);
  strokeWeight(6);
  for (let i = 0; i < 15; i++) {
    const ox = random(-1, 1);
    const oy = random(-1, 1);
    line(x1 + ox, y1 + oy, x2 + ox, y2 + oy);
  }

  stroke(60, 50);
  strokeWeight(1);
  for (let i = 0; i < 5; i++) {
    const p = map(i, 0, 4, 0, len);
    const nx1 = x1 + cos(angle) * p + random(-2, 2);
    const ny1 = y1 + sin(angle) * p + random(-2, 2);
    const nx2 = nx1 + cos(angle + 90) * 5;
    const ny2 = ny1 + sin(angle + 90) * 5;
    line(nx1, ny1, nx2, ny2);
  }
}

function drawDetails(x, y, radius) {
  const angle = 45;
  const px = x + cos(angle) * (radius + 5);
  const py = y + sin(angle) * (radius + 5);
  fill(40);
  stroke(20);
  strokeWeight(1);
  ellipse(px, py, 10, 10);
}
