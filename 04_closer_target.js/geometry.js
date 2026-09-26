function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function distance(x1, y1, x2, y2) {
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}

function circle1IsCloser(x1, y1, x2, y2, x3, y3) {
    return (
        distance(x1, y1, x2, y2) <
        distance(x1, y1, x3, y3)
    );
}

module.exports = {
    calcOffset,
    distance,
    circle1IsCloser,
};