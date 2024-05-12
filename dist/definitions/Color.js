import { Palette, SemanticColorNames, Shades, Tints, Tones, } from './Color.tokens';
export var ColorVariation;
(function (ColorVariation) {
    ColorVariation["neutral"] = "neutral";
    ColorVariation["red"] = "red";
    ColorVariation["blue"] = "blue";
    ColorVariation["green"] = "green";
    ColorVariation["yellow"] = "yellow";
})(ColorVariation || (ColorVariation = {}));
export var Color;
(function (Color) {
    Color["NEUTRAL"] = "neutral";
    Color["RED"] = "red";
    Color["BLUE"] = "blue";
    Color["GREEN"] = "green";
    Color["YELLOW"] = "yellow";
})(Color || (Color = {}));
/**
 * Get color collection.
 * @param color predefined colors, neutral, red, blue, green, yellow
 * @returns color collection for each.
 */
function getColorCollection(color) {
    return {
        name: SemanticColorNames[color],
        palette: Palette[color],
        shades: Shades[color],
        tones: Tones[color],
        tints: Tints[color],
    };
}
/**
 * Create ColorFactory for each color.
 * @returns a ColorFactory for getting color collections.
 */
export function createColorFactory() {
    return {
        getNeutralColors() {
            return getColorCollection(Color.NEUTRAL);
        },
        getRedColors() {
            return getColorCollection(Color.RED);
        },
        getBlueColors() {
            return getColorCollection(Color.BLUE);
        },
        getGreenColors() {
            return getColorCollection(Color.GREEN);
        },
        getYellowColors() {
            return getColorCollection(Color.YELLOW);
        },
    };
}
