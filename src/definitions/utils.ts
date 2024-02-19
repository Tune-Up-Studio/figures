/**
 * 
 * @param initialTerm Initial term for harmonic sequence
 * @param i Represents ith term
 * @param r Ratio of the sequence
 * @returns A harmonic term object
 */
export function HarmonicScale(initialTerm: number, n: number, r: number) {
  return {
    initialTerm: initialTerm,
    n: n,
    r: r,
    ith(i: number) {
      return initialTerm * (this.r ** (i / this.n));
    }
  }
}