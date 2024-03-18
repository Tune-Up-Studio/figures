export type Colors = string[];
export declare const VARIATION_LEVELS = 10;
export declare enum ColorVariation {
    neutral = "neutral",
    red = "red",
    blue = "blue",
    green = "green",
    yellow = "yellow"
}
export declare const Palette: Record<string, Colors>;
export declare const Shades: Record<string, Colors>;
export declare const Tints: Record<string, Colors>;
export declare const Tones: Record<string, Colors>;
export declare enum Color {
    NEUTRAL = "neutral",
    RED = "red",
    BLUE = "blue",
    GREEN = "green",
    YELLOW = "yellow"
}
export interface ColorCollection {
    name: string;
    palette: Colors;
    shades: Colors;
    tones: Colors;
    tints: Colors;
}
export type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export interface ColorMap {
    of(level: ColorLevel): string;
}
export interface ColorFactory {
    getNeutralColors(): ColorCollection;
    getRedColors(): ColorCollection;
    getBlueColors(): ColorCollection;
    getGreenColors(): ColorCollection;
    getYellowColors(): ColorCollection;
}
/**
 * Create ColorFactory for each color.
 * @returns a ColorFactory for getting color collections.
 */
export declare function createColorFactory(): ColorFactory;
