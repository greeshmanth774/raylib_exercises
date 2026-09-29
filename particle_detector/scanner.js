const r = require("raylib");

function updatePosition(xCoordinate, velocity) {
    return xCoordinate + velocity;
}

function updateDirection(xCoordinate, startValue, endValue, speed) {
    return xCoordinate <= startValue ||
        xCoordinate >= endValue
        ? -speed : speed;
}

function isOverlap(range1_start, range1_end, range2_start, range2_end) {
    return !(range2_start > range1_end ||
        range1_start > range2_end)
}

function chooseHdColor(range1_start,
    range1_end,
    range2_start,
    range2_end) {

    return isOverlap(range1_start, range1_end, range2_start, range2_end)
        ? r.RED : r.WHITE;

}

function chooseVdcolor(
    xCoordinate,
    width,
    particle1_x,
    particle1_Width,
    particle2_x,
    particle2_width) {

    const range1_end = updatePosition(xCoordinate, width);
    const case1_range2_end = updatePosition(particle1_x, particle1_Width);
    const case2_range2_end = updatePosition(particle2_x, particle2_width);

    let color =
        isOverlap(xCoordinate, range1_end, particle1_x, case1_range2_end) ||
            isOverlap(xCoordinate, range1_end, particle2_x, case2_range2_end) ?
            r.RED : r.WHITE;

    return color;
}

module.exports = {
    updatePosition,
    updateDirection,
    isOverlap,
    chooseHdColor,
    chooseVdcolor,
};