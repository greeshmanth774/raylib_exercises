const r = require("raylib");
const yCoordinate = 0;

const windowWidth = 600;
const windowHeight = 400;


let detector1_xCoordinate = 10;
let detector1_color = r.WHITE;
let detector1_speed = 3;
const detector1_width = 60;
const detector1_start = 0;
const detector1_end = (windowWidth / 2) - detector1_width;


let detector2_xCoordinate = windowWidth / 2 + 10;
let detector2_color = r.WHITE;
let detector2_speed = 2;
const detector2_width = 60;
const detector2_start = windowWidth / 2;
const detector2_end = windowWidth - detector2_width;


const particle1_Color = r.BLUE;
const particle1_x = 250;
const particle1Width = 150;

const particle2_Color = r.BLUE;
const particle2_x = 100;
const particle2_width = 20;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "particle_detector");
    r.SetTargetFPS(60);
}

function selectColor(start1, end1, start2, end2) {
    if (start2 >= start1 && start2 <= end1) {
        return r.RED;
    }
    if (start1 >= start2 && start1 <= end2) {
        return r.RED;
    }
    return r.WHITE;
}

function objectDetection(xCoordinate, width, particle1_x, particle1_Width, particle2_x, particle2_width) {
    let color = selectColor(xCoordinate, xCoordinate + width,
        particle1_x, particle1_x + particle1_Width);
    if (color === r.WHITE) {
        color = selectColor(xCoordinate, xCoordinate + width,
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

    detector1_xCoordinate = updatePosition(detector1_xCoordinate, detector1_speed);
    detector1_speed = updateDirection(detector1_xCoordinate, detector1_start,
        detector1_end, detector1_speed);

    detector2_xCoordinate = updatePosition(detector2_xCoordinate, detector2_speed);
    detector2_speed = updateDirection(detector2_xCoordinate, detector2_start,
        detector2_end, detector2_speed);

    detector1_color = objectDetection(detector1_xCoordinate, detector1_width, particle1_x, particle1_Width, particle2_x, particle2_width);
    detector2_color = objectDetection(detector2_xCoordinate, detector2_width, particle1_x, particle1_Width, particle2_x, particle2_width);
}



function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(particle1_x, yCoordinate, particle1Width, windowHeight, particle1_Color);
    r.DrawRectangle(particle2_x, yCoordinate, particle2_width, windowHeight, particle2_Color);
    r.DrawRectangle(detector1_xCoordinate, yCoordinate, detector1_width, windowHeight, detector1_color);
    r.DrawRectangle(detector2_xCoordinate, yCoordinate, detector2_width, windowHeight, detector2_color);
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