const r = require("raylib");
const yCoordinate = 0;

const windowWidth = 600;
const windowHeight = 400;

let horizontalDetector1_xCoordinate = 0;
let horizontalDetector1_yCoordinate = 10;
let horizontalDetector1_color = r.WHITE;
let horizontalDetector1_change = 3;
const horizontalDetector1_height = 30;
const horizontalDetector1_start = 0;
const horizontalDetector1_end = windowHeight - horizontalDetector1_height;

let detector1_xCoordinate = 10;
let detector1_color = r.WHITE;
let detector1_change = 3;
const detector1_width = 60;
const detector1_start = 0;
const detector1_end = (windowWidth / 2) - detector1_width;

let detector2_xCoordinate = windowWidth / 2 + 10;
let detector2_color = r.WHITE;
let detector2_change = 2;
const detector2_width = 60;
const detector2_start = windowWidth / 2;
const detector2_end = windowWidth - detector2_width;

const Horizontalparticle1_Color = r.BLUE;
const Horizontalparticle1_y = 100;
const Horizontalparticle1_Height = 90;

const particle1_Color = r.BLUE;
const particle1_x = 100;
const particle1_Width = 90;

const particle2_Color = r.BLUE;
const particle2_x = 400;
const particle2_width = 60;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "particle_detector");
    r.SetTargetFPS(60);
    r.SetTraceLogLevel(r.LOG_NONE);
}

function singleParticleCheck(range1_start, range1_end, range2_start, range2_end) {

    if (range2_start >= range1_start && range2_start <= range1_end) return r.RED;
    if (range1_start >= range2_start && range1_start <= range2_end) return r.RED;

    return r.WHITE;
}

function doubleParticleCheck(xCoordinate, width, particle1_x, particle1_Width, particle2_x, particle2_width) {

    let color = singleParticleCheck(xCoordinate, xCoordinate + width,
        particle1_x, particle1_x + particle1_Width);

    if (color == r.WHITE) {
        color = singleParticleCheck(xCoordinate, xCoordinate + width,
            particle2_x, particle2_x + particle2_width);
    }

    return color;
}


function updatePosition(xCoordinate, speed) {
    return xCoordinate + speed;
}

function updateDirection(xCoordinate, startValue, endValue, speed) {
    if (xCoordinate <= startValue || xCoordinate >= endValue) {
        speed = speed * (-1);
    }
    return speed;
}



function update() {

    detector1_xCoordinate = updatePosition(detector1_xCoordinate, detector1_change);
    detector1_change = updateDirection(detector1_xCoordinate, detector1_start,
        detector1_end, detector1_change);
    detector1_color = doubleParticleCheck(detector1_xCoordinate, detector1_width, particle1_x, particle1_Width, particle2_x, particle2_width);

    detector2_xCoordinate = updatePosition(detector2_xCoordinate, detector2_change);
    detector2_change = updateDirection(detector2_xCoordinate, detector2_start,
        detector2_end, detector2_change);
    detector2_color = doubleParticleCheck(detector2_xCoordinate, detector2_width, particle1_x, particle1_Width, particle2_x, particle2_width);

    horizontalDetector1_yCoordinate = updatePosition(horizontalDetector1_yCoordinate, horizontalDetector1_change);
    horizontalDetector1_change = updateDirection(horizontalDetector1_yCoordinate, horizontalDetector1_start,
        horizontalDetector1_end, horizontalDetector1_change);
    horizontalDetector1_color = singleParticleCheck(horizontalDetector1_yCoordinate, horizontalDetector1_yCoordinate + horizontalDetector1_height,
        Horizontalparticle1_y, Horizontalparticle1_y + Horizontalparticle1_Height);

}



function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(particle1_x, yCoordinate, particle1_Width, windowHeight, particle1_Color);
    r.DrawRectangle(particle2_x, yCoordinate, particle2_width, windowHeight, particle2_Color);
    r.DrawRectangle(horizontalDetector1_xCoordinate, Horizontalparticle1_y, windowWidth, Horizontalparticle1_Height
        , Horizontalparticle1_Color);
    r.DrawRectangle(detector1_xCoordinate, yCoordinate, detector1_width, windowHeight, detector1_color);
    r.DrawRectangle(detector2_xCoordinate, yCoordinate, detector2_width, windowHeight, detector2_color);
    r.DrawRectangle(horizontalDetector1_xCoordinate, horizontalDetector1_yCoordinate,
        windowWidth, horizontalDetector1_height, horizontalDetector1_color);
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