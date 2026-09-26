const r = require("raylib");
const color = r.RED;

const windowWidth = 800;
const windowHeight = 400;

const outsideRectangleWidth = 500;

const outsideRectangleLength = 200;
const xOfOut = 100;
const yOfOut = 100;


const insideRectangleWidth = 60;
const insideRectangleHeight = 60;


function Coordinate(coordinate, Outmeasurement, inMeasurement) {
    return (Outmeasurement - inMeasurement) / 2 + coordinate;
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
        xOfOut,
        yOfOut,
        outsideRectangleWidth,
        outsideRectangleLength,
        r.GREEN,
    );
    r.DrawRectangle(
        Coordinate(xOfOut, outsideRectangleWidth, insideRectangleWidth),
        Coordinate(yOfOut, outsideRectangleLength, insideRectangleHeight),
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