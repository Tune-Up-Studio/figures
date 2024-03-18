/**
 * Spaces are defined to achieve consistent spacing between layouts.
 * Inspired by Atlassian spacing, use 8px base unit.
 * It has 10 levels from 0px to 80px
 * 1rem equals to 16px(which is twice of a unit).
 * https://atlassian.design/foundations/spacing
 */
export const SPACES = 10;
export const SPACE_BASE_SIZE = 8;
export const SPACE_UNIT_FIXED = 'px';
export const SPACE_UNIT_RELATIVE = 'rem';

export type SpaceLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Multiplicand = SpaceLevel;

export function spacing(multiplicand: Multiplicand): number {
  return SPACE_BASE_SIZE * multiplicand;
}

export function toPx(numVal: number): string {
  return numVal + SPACE_UNIT_FIXED;
}

export function toRem(numVal: number): string {
  return numVal / 16 + SPACE_UNIT_RELATIVE;
}

export interface SpaceFactory {
  getLevelOf(level: SpaceLevel): number;
}

/**
 * Create SpaceFactory
 * @returns a SpaceFactory for getting space at each level.
 */
export function createSpaceFactory(): SpaceFactory {
  return {
    getLevelOf(level: SpaceLevel) {
      return spacing(level);
    },
  };
}
