/**
 * Curve defines roundness for various shapes.
 * It has 6 levels.
 * Each level has its semantic name.
 */
export type CurveVariant = 'Slighter' | 'Slight' | 'Lighter' | 'Tight' | 'Tighter' | 'Full';
export declare enum CurveLevel {
    zero = "Slighter",
    one = "Slight",
    two = "Lighter",
    three = "Tight",
    four = "Tighter",
    five = "Full"
}
