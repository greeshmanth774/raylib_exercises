const r = require("raylib");
const geometry = require("./geometry");

const xOfStartCircle = 300;
const yOfStartCircle = 300;
const radiusOfStartCircle = 10;
const colorOfStartCircle = r.ORANGE;

const xOfCircle1 = 300;
const yOfCircle1 = 150;
const radiusOfCircle1 = 10;
const colorOfCircle1 = r.WHITE;

const xOfCircle2 = 150;
const yOfCircle2 = 300;
const radiusOfCircle2 = 10;
const colorOfCircle2 = r.GREEN;



function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(500, 500, "first");
    r.SetTargetFPS(60);
}

function update() {
    // change the state
}

function draw() {
    let xOfLineEndPoint = xOfCircle2;
    let yOfLineEndPoint = yOfCircle2;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawCircle(
        xOfStartCircle,
        yOfStartCircle,
        radiusOfStartCircle,
        colorOfStartCircle,
    );
    r.DrawCircle(xOfCircle1, yOfCircle1, radiusOfCircle1, colorOfCircle1);
    r.DrawCircle(xOfCircle2, yOfCircle2, radiusOfCircle2, colorOfCircle2);

    if (geometry.circle1IsCloser(xOfStartCircle, yOfStartCircle, xOfCircle1, yOfCircle1,
        xOfCircle2, yOfCircle2)) {
        xOfLineEndPoint = xOfCircle1;
        yOfLineEndPoint = yOfCircle1;
    }

    r.DrawLine(
        xOfStartCircle,
        yOfStartCircle,
        xOfLineEndPoint,
        yOfLineEndPoint,
        r.BLUE,
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