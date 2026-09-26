const r = require("raylib");
const color = r.RED;

const windowWidth = 800;
const windowHeight = 400;


const insideRectangleWidth = 200;
const insideRectangleHeight = 300;


function Coordinate(Outmeasurement, inMeasurement) {
    return (Outmeasurement - inMeasurement) / 2;
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "first");
    r.SetTargetFPS(60);
}

function update() {
    // change the state
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        Coordinate(windowWidth, insideRectangleWidth),
        Coordinate(windowHeight, insideRectangleHeight),
        insideRectangleWidth,
        insideRectangleHeight,
        color,
    );
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