/**
 * Spaces are defined to achieve consistent spacing between layouts.
 * Inspired by Atlassian spacing, use 8px base unit.
 * It has 10 levels from 0px to 80px
 * 1rem equals to 16px(which is twice of a unit).
 * https://atlassian.design/foundations/spacing
 */
export declare const SPACES = 10;
export declare const SPACE_BASE_SIZE = 8;
export declare const SPACE_UNIT_FIXED = "px";
export declare const SPACE_UNIT_RELATIVE = "rem";
export type SpaceLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Multiplicand = SpaceLevel;
export declare function spacing(multiplicand: Multiplicand): number;
export declare function toPx(numVal: number): string;
export declare function toRem(numVal: number): string;
export interface SpaceFactory {
    getLevelOf(level: SpaceLevel): number;
}
/**
 *
 * @returns a SpaceFactory for getting space at each level.
 */
export declare function spaceFactory(): SpaceFactory;
