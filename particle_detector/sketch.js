const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;

const particleColor = r.BLUE;
let color = r.WHITE;
let xCoordinate = 10;
const yCoordinate = 0;
const width = 60;

const particle1Width = 150;
const particle1_x = 250;

const particle2_x = 100;
const particle2_width = 20;

let dx = 2;

function selectColor(start1, end1, start2, end2) {
    if (start2 >= start1 && start2 <= end1) {
        return r.RED;
    }
    if (start1 >= start2 && start1 <= end2) {
        return r.RED;
    }
    return r.WHITE;
}

function objectDetection() {
    color = selectColor(xCoordinate, xCoordinate + width,
        particle1_x, particle1_x + particle1Width);
    if (color === r.WHITE) {
        color = selectColor(xCoordinate, xCoordinate + width,
            particle2_x, particle2_x + particle2_width);
    }
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "first");
    r.SetTargetFPS(60);
}

function update() {
    updatePosition();
    objectDetection();
}


function updatePosition() {
    if (xCoordinate <= 0 || xCoordinate >= windowWidth - width) {
        dx = dx * (-1);
    }
    xCoordinate = xCoordinate + dx;
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(particle1_x, yCoordinate, particle1Width, windowHeight, particleColor);
    r.DrawRectangle(particle2_x, yCoordinate, particle2_width, windowHeight, particleColor);
    r.DrawRectangle(xCoordinate, yCoordinate, width, windowHeight, color);
    r.EndDrawing();

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