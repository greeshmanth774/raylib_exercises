const r = require("raylib");
let color = r.RED;


const x1 = 100;
const y1 = 100;
const r1 = 20;

const x2 = 200;
const y2 = 100;
const r2 = 30;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    // prepare the sketch
}

function update() {
    // change the state
}

function draw() {
    // draw the current state
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};