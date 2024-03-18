/**
 * Thickness has 5 levels.
 * As level rises, line gets thicker.
 * Thickness can be applied to lines such as border lines.
 */
export const THICKNESS = 5;

export type ThickLevel = 'Thiner' | 'Thin' | 'Mid' | 'Thick' | 'Thicker';

export enum ThicknessLevel {
  zero = 'Thiner',
  one = 'Thin',
  two = 'Mid',
  four = 'Thick',
  five = 'Thicker',
}

export const Thickness = {
  Thiner: 1,
  Thin: 10,
  Mid: 12.5,
  Thick: 15,
  Thicker: 20,
};
