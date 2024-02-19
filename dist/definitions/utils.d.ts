/**
 *
 * @param initialTerm Initial term for harmonic sequence
 * @param i Represents ith term
 * @param r Ratio of the sequence
 * @returns A harmonic term object
 */
export declare function HarmonicScale(initialTerm: number, n: number, r: number): {
    initialTerm: number;
    n: number;
    r: number;
    ith(i: number): number;
};
