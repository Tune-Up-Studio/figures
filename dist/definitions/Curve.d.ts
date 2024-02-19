/**
 * Curve defines roundness for various shapes.
 * It has 6 levels.
 * Each level has its semantic name.
 */
export declare const CURVES = 6;
export type CurveVariant = 'Slighter' | 'Slight' | 'Lighter' | 'Tight' | 'Tighter' | 'Full';
export declare enum CurveLevel {
    zero = "Slighter",
    one = "Slight",
    two = "Lighter",
    three = "Tight",
    four = "Tighter",
    five = "Full"
}
export declare const Curve: {
    Slighter: number;
    Slight: number;
    Lighter: number;
    Tight: number;
    Tighter: number;
    Full: number;
};
