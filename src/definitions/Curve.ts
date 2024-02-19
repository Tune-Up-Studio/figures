/**
 * Curve defines roundness for various shapes.
 * It has 6 levels.
 * Each level has its semantic name.
 */
export const CURVES = 6;
export type CurveVariant = 'Slighter' | 'Slight' | 'Lighter' | 'Tight' | 'Tighter' | 'Full';

export enum CurveLevel {
  zero = 'Slighter',
  one = 'Slight',
  two = 'Lighter', 
  three = 'Tight', 
  four = 'Tighter', 
  five = 'Full'
}

export const Curve = {
  Slighter: 1,
  Slight: 10,
  Lighter: 20,
  Tight: 30,
  Tighter: 60,
  Full: 100
}