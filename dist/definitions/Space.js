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
export function spacing(multiplicand) {
    return SPACE_BASE_SIZE * multiplicand;
}
export function toPx(numVal) {
    return numVal + SPACE_UNIT_FIXED;
}
export function toRem(numVal) {
    return numVal / 16 + SPACE_UNIT_RELATIVE;
}
/**
 *
 * @returns a SpaceFactory for getting space at each level.
 */
export function spaceFactory() {
    return {
        getLevelOf(level) {
            return spacing(level);
        }
    };
}
