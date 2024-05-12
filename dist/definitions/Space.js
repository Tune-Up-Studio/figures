import { SPACE_BASE_SIZE, SPACE_UNIT_FIXED, SPACE_UNIT_RELATIVE, } from './Space.tokens';
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
 * Create SpaceFactory
 * @returns a SpaceFactory for getting space at each level.
 */
export function createSpaceFactory() {
    return {
        getLevelOf(level) {
            return spacing(level);
        },
    };
}
