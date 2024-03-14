export type Colors = string[];
export declare const COLORLEVELS = 10;
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
/**
 * Colors have 6 levels.
 * Each is a integer from 0 to 5.
 * As level rises, color gets brighter.
 */
export declare const COLOR_LEVELS = 6;
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
export type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5;
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
 *
 * @returns a ColorFactory for getting color collections.
 */
export declare function colorFactory(): ColorFactory;
