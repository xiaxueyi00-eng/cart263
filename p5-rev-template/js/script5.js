// -------------------- VARIABLES --------------------
let counter = 0;

let radius = 20;
let ellipseAlpha = 40;

// -------------------- SQUARE OBJECTS --------------------
let orangeSquare = {
    x: 50,
    y: 50,
    w: 100,
    h: 100,
    color: null,
    hoverColor: null
};

let redSquare = {
    x: 200,
    y: 50,
    w: 100,
    h: 100,
    color: null,
    hoverColor: null
};

// -------------------- SETUP --------------------
function setup() {
    createCanvas(600, 400);

    orangeSquare.color = color(255, 165, 0);
    orangeSquare.hoverColor = color(255, 200, 120);

    redSquare.color = color(255, 0, 0);
    redSquare.hoverColor = color(255, 120, 120);
}

// -------------------- DRAW --------------------
function draw() {
    background(0);

    displaySquare(orangeSquare);
    displaySquare(redSquare);

    // draw ellipses only if counter is between 1 and 10
    if (counter >= 1 && counter <= 10) {
        let i = 0;
        let currentRadius = radius;
        let currentAlpha = ellipseAlpha;

        while (i < counter) {
            drawCircle(width / 2, height / 2, currentRadius, currentAlpha);
            currentRadius += 15;
            currentAlpha += 20;
            i++;
        }
    }
}

// -------------------- FUNCTIONS --------------------
function displaySquare(square) {
    if (checkCollisionWithSquare(square)) {
        fill(square.hoverColor);
    } else {
        fill(square.color);
    }
    rect(square.x, square.y, square.w, square.h);
}

function checkCollisionWithSquare(square) {

    if (
        mouseX > square.x &&
        mouseX < square.x + square.w &&
        mouseY > square.y &&
        mouseY < square.y + square.h
    ) {
        return true;
    } else {
        return false;
    }

}

// BONUS I
function drawCircle(x, y, r, a) {
    fill(255, a);
    noStroke();
    ellipse(x, y, r * 2, r * 2);
}

// -------------------- MOUSE CLICK --------------------
function mousePressed() {
    if (checkCollisionWithSquare(orangeSquare)) {
        counter++;
    }

    if (checkCollisionWithSquare(redSquare)) {
        counter--;
    }
}