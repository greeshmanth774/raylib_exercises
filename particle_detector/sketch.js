const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;

let xCoordinate = 10;
const yCoordinate = 0;
const width = 30;
const color = r.WHITE;

let dx = 2;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(windowWidth, windowHeight, "first");
    r.SetTargetFPS(60);
}
function update() {

    if (xCoordinate <= 0 || xCoordinate >= windowWidth - width) {
        dx = dx * (-1);
    }
    xCoordinate = xCoordinate + dx;
}

const particalWidth = 100;
const particle_x = 250;
function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(particle_x, yCoordinate, particalWidth, windowHeight, r.BLUE)
    r.DrawRectangle(xCoordinate, yCoordinate, width, windowHeight, color);
    r.DrawRectangle
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