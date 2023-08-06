let W = 800; // Canvace Width
let H = 800; // Canvace Height

// Center Canvace X & Y

let centerX = W / 2; 
let centerY = W / 2;

// Yellow Moon Radius X & Y

let yRadiusX = W / 2;
let yRadiusY = H / 4;

let yAngle = 0; // Yellow moon angle

// Blue Moon Radius X & Y

let bRadiusX = W / 4;
let bRadiusY = H / 2;

let bAngle = 0; // Blue moon angle

// Red moon Radius (one one value to make circular orbit)

let rRadius = bRadiusX / 2;

let rAngle = 0; // Red moon angle

// Light arc starting & ending angle

let lArcAngleStart = 270; 
let lArcAngleFin = 90; 

// Dark arc starting & ending angle

let dArcAngleStart = lArcAngleFin; 
let dArcAngleFin = lArcAngleStart; 

let lArcSize = W / 10; // Light arc size
let dArcSize = lArcSize; // Dark arc size 

function setup() {
  createCanvas(W, H);
}

function draw() {
  background(0);
  angleMode(DEGREES);

  // Yellow Orbit
  stroke(255, 255, 0);
  noFill();
  ellipse(centerX, centerY, yRadiusX * 2, yRadiusY * 2);
  

  // Blue Orbit
  stroke(0, 0, 255);
  noFill();
  ellipse(centerX, centerY, bRadiusX * 2, bRadiusY * 2);
  
  // Lightside
  
  fill(255);
  noStroke();
  arc(centerX, centerY, lArcSize, lArcSize, yAngle + lArcAngleStart, yAngle + lArcAngleFin); // sa & ea are the angle of the Yellow moon + 270 & 90 which are the starting & ending positions of the arcs

  // lArcAngleStart = lArcAngleStart - 1;
  // lArcAngleFin = lArcAngleFin - 1;

  // Darkside
  fill(50);
  noStroke();
  arc(centerX, centerY, dArcSize, dArcSize, yAngle - lArcAngleStart, yAngle - lArcAngleFin);

  // dArcAngleStart = dArcAngleStart - 1;
  // dArcAngleFin = dArcAngleFin - 1;

  // Yellow Moon
  let yx = centerX + yRadiusX * cos(yAngle);
  let yy = centerY + yRadiusY * sin(yAngle);

  // Yellow Moon distance from center
  const YMD = dist(yx, yy, centerX, centerY);
  fill(255, 255, 0);
  text(YMD, 10, 20); // Display Yellow Moon distance from center

  fill(255, 255, 0);
  ellipse(yx, yy, lArcSize / 2, lArcSize / 2);

  yAngle = yAngle - 0.5;

  // Blue Moon
  let bx = centerX + bRadiusX * cos(bAngle);
  let by = centerY + bRadiusY * sin(bAngle);

  // Blue Moon distance from center
  const BMD = dist(bx, by, centerX, centerY);
  fill(0, 0, 255);
  text(BMD, 10, 40); // Display Blue Moon distance from center

  fill(0, 0, 255);
  ellipse(bx, by, lArcSize / 2, lArcSize / 2);

  bAngle = bAngle - 0.2;

  // Red Moon orbit & Red moon

  // Orbit for the red moon
  noFill();
  stroke(255, 0, 0);
  ellipse(bx, by, lArcSize * 2.5, lArcSize * 2.5);

  // Red Moon
  let rx = centerX + bRadiusX * cos(bAngle) + rRadius * cos(rAngle); // Add the blue moon angle calculation to the red one to get the red moon to orbit the blue moon
  let ry = centerY + bRadiusY * sin(bAngle) + rRadius * sin(rAngle);

  fill(255, 0, 0);
  ellipse(rx, ry, lArcSize / 4, lArcSize / 4);

  rAngle = rAngle - 1;

  // Center dot (changes colour depending on which moon is closer)
  if(BMD > YMD) { // If yellow moon is closer to centerX
    fill(255, 255, 0);
    noStroke();
    ellipse(centerX, centerY, W / 40, H / 40); // Yellow ellipse is generated
  } else { // If blue moon is closer
    fill(0, 0, 255);
    noStroke();
    ellipse(centerX, centerY, W / 40, H / 40); // Blue ellipse is generated
  };

  fill('dodgerblue')
  text('Jack King - s5326059', 10, 60)
}