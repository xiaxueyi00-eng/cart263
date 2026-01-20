"use strict";

//set the defaut for color and state.
let r, g, b;
let state = true;
let size = 50;


//setup the canvas and random color and stop the loop for draw
function setup() {
    createCanvas(500, 500);
    pickColor();
    noLoop();
}

//draw the background and circle and square
function draw() {

    background(0, 0, 0);

    // full circle
    // if (state === true) {
    //     for (let i = 0; i < 10; i++) {
    //         for (let j = 0; j < 10; j++) {
    //             fill(r, g, b);
    //             ellipse(size/2 + size * i, size/2 + size * j, size);
    //         }
    //     }
    // }
    // else {
    //     for (let i = 0; i < 10; i++) {
    //         for (let j = 0; j < 10; j++) {
    //             fill(r, g, b);
    //             rect(size * i, size * j, size);
    //         }
    //     }
    // }

    // bouns -- circle and square
    if (state === true) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                fill(r, g, b);
                ellipse(size / 2 + size * i, size / 2 + size * 2 * j, size);
                let number_row = (2 * j) + 1;
                rect(size * i, size * number_row, size);
            }
        }
    }
    else {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                fill(r, g, b);
                rect(size * i, size * 2 * j, size);
                let number_row = (2 * j) + 1;
                ellipse(size / 2 + size * i, size / 2 + size * number_row, size);
            }
        }

    }

    //console.log(state);
}

//set the random color for rgb.
function pickColor() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}

//if key pressed chang color and redraw one times.
function keyPressed() {
    if (key === ' ') {
        pickColor();
        redraw();
    }
}

// if mouseClicked change the change the state between trun and false.
function mouseClicked() {
    if (state === true) {
        state = false
        redraw();
    }
    else {
        state = true;
        redraw();
    }
}
