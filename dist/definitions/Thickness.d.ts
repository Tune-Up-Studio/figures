/**
 * Thickness has 5 levels.
 * As level rises, line gets thicker.
 * Thickness can be applied to lines such as border lines.
 */
export declare const THICKNESS = 5;
export type ThickLevel = 'Thiner' | 'Thin' | 'Mid' | 'Thick' | 'Thicker';
export declare enum ThicknessLevel {
    zero = "Thiner",
    one = "Thin",
    two = "Mid",
    four = "Thick",
    five = "Thicker"
}
export declare const Thickness: {
    Thiner: number;
    Thin: number;
    Mid: number;
    Thick: number;
    Thicker: number;
};
