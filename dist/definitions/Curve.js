/**
 * Curve defines roundness for various shapes.
 * It has 6 levels.
 * Each level has its semantic name.
 */
export const CURVES = 6;
export var CurveLevel;
(function (CurveLevel) {
    CurveLevel["zero"] = "Slighter";
    CurveLevel["one"] = "Slight";
    CurveLevel["two"] = "Lighter";
    CurveLevel["three"] = "Tight";
    CurveLevel["four"] = "Tighter";
    CurveLevel["five"] = "Full";
})(CurveLevel || (CurveLevel = {}));
export const Curve = {
    Slighter: 1,
    Slight: 10,
    Lighter: 20,
    Tight: 30,
    Tighter: 60,
    Full: 100
};
