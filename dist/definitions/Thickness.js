/**
 * Thickness has 4 levels.
 * As level rises, line gets thicker.
 * Thickness can be applied to lines such as border lines.
 */
export const THICKNESS = 4;
export var ThicknessLevel;
(function (ThicknessLevel) {
    ThicknessLevel["zero"] = "Thiner";
    ThicknessLevel["one"] = "Thin";
    ThicknessLevel["two"] = "Mid";
    ThicknessLevel["three"] = "Thick";
    ThicknessLevel["four"] = "Thick";
    ThicknessLevel["five"] = "Thicker";
})(ThicknessLevel || (ThicknessLevel = {}));
export const Thickness = {
    Thiner: 1,
    Thin: 10,
    Mid: 12.5,
    Thick: 15,
    Thicker: 20
};
