const r = require("raylib");
const s = require("./scanner.js");

const hd = require("./hd.js");
const d1 = require("./d1.js");
const d2 = require("./d2.js");

const hp = require("./hp.js");
const p1 = require("./p1.js");
const p2 = require("./p2.js");


const windowWidth = 600;
const windowHeight = 400;
const yCoordinate = 0;


hd.end = windowHeight - hd.height;

d1.end = (windowWidth / 2) - d1.width;

d2.end = windowWidth - d2.width;
d2.start = windowWidth / 2;
d2.x = windowWidth / 2;



function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "particle_detector");
    r.SetTargetFPS(60);
}


function update() {

    d1.xCoordinate = s.updatePosition(d1.xCoordinate, d1.change);
    d1.change =
        s.updateDirection(
            d1.xCoordinate,
            d1.start,
            d1.end,
            d1.change);
    d1.color =
        s.chooseVdcolor(
            d1.xCoordinate,
            d1.width,
            p1.x,
            p1.width,
            p2.x,
            p2.width);


    d2.x =
        s.updatePosition(
            d2.x,
            d2.change);
    d2.change =
        s.updateDirection(
            d2.x,
            d2.start,
            d2.end,
            d2.change);
    d2.color =
        s.chooseVdcolor(
            d2.x,
            d2.width,
            p1.x,
            p1.width,
            p2.x,
            p2.width);


    const range1_end = s.updatePosition(hd.yCoordinate, hd.height);
    const range2_end = s.updatePosition(hp.y, hp.height);

    hd.yCoordinate = s.updatePosition(hd.yCoordinate, hd.change);
    hd.change =
        s.updateDirection(
            hd.yCoordinate,
            hd.start,
            hd.end,
            hd.change);
    hd.color =
        s.chooseHdColor(
            hd.yCoordinate,
            range1_end,
            hp.y,
            range2_end);

}



function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        p1.x,
        yCoordinate,
        p1.width,
        windowHeight,
        p1.color);
    r.DrawRectangle(
        p2.x,
        yCoordinate,
        p2.width,
        windowHeight,
        p2.color);
    r.DrawRectangle(
        hd.xCoordinate,
        hp.y,
        windowWidth,
        hp.height,
        hp.color);
    r.DrawRectangle(
        d1.xCoordinate,
        yCoordinate,
        d1.width,
        windowHeight,
        d1.color);
    r.DrawRectangle(
        d2.x,
        yCoordinate,
        d2.width,
        windowHeight,
        d2.color);
    r.DrawRectangle(
        hd.xCoordinate,
        hd.yCoordinate,
        windowWidth,
        hd.height,
        hd.color);
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