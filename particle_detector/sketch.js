const r = require("raylib");

const windowWidth = 300;
const windowHeight = 200;

let xCoordinate = 10;
const yCoordinate = 0;
const width = 30;
const color = r.WHITE;

let change = 2;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(windowWidth, windowHeight, "first");
    r.SetTargetFPS(60);
}
function update() {

    if (xCoordinate <= 0 || xCoordinate >= windowWidth - width) {
        change = change * (-1);
    }
    xCoordinate = xCoordinate + change;
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
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