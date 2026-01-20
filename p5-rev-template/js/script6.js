"use strict";
// ---------------- VARIABLES / CONSTS ----------------
const TEXT_SIZE = 28;
const TEXT_COLOR = 255;
const SPACING = 24;

let textObj = {
    str: "test",
    x: 0,
    y: 0
};

// ---------------- SETUP ----------------
function setup() {
    createCanvas(600, 400);

    textSize(TEXT_SIZE);
    fill(TEXT_COLOR);
    textAlign(CENTER, CENTER);

    textObj.x = width / 2;
    textObj.y = height / 2;
}

// ---------------- DRAW ----------------
function draw() {
    background(0);

    text(textObj.str, textObj.x, textObj.y);

    // ---------- FOR LOOP 1 ----------
    for (let i = 0; i <= 9; i++) {
        let xPos = 20 + i * SPACING;
        let yPos = 20;

        text(i, xPos, yPos);
    }

    // ---------- FOR LOOP 2 ----------

    for (let i = 1; i <= 15; i++) {
        let xPos = 20;
        let yPos = 20 + i * SPACING;

        text(i, xPos, yPos);
    }
}