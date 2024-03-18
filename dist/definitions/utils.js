/**
 *
 * @param initialTerm Initial term for harmonic sequence
 * @param i Represents ith term
 * @param r Ratio of the sequence
 * @returns A harmonic term object
 */
export function HarmonicScale(initialTerm, n, r) {
    return {
        initialTerm: initialTerm,
        n: n,
        r: r,
        ith(i) {
            return initialTerm * (this.r ** (i / this.n));
        }
    };
}
