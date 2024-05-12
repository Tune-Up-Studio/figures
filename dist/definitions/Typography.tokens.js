/**
 * Typography for figures.
 * Typography for figures focuses on Text hierarchy and contrast within layout.
 * Following properties should be considered for Typography.
 * Based on typographic scale
 * https://spencermortensen.com/articles/typographic-scale/
 * ithTerm = 0thTerm * pow(r, i/n)
 * - Readability
 * - Size
 * - Weight
 * - Color
 * - Space
 * Inspired by Atlassian Typography
 * https://atlassian.design/foundations/typography/
 */
const TYPOSIZE_RELATIVE_DEFAULT = '1rem';
const TYPOSIZE_WEB_DEFAULT = '1em';
const TYPOSIZE_FIXED_DEFAULT = '12px';
const TYPO_LINEHEIGHT_DEFAULT = '16px';
const TYPO_LETTERSPACING_DEFAULT = 0;
/**
 * @HighContrast Augmented Fourth, Perfect Fifth, Golden Ratio
 * @MidContrast Major Third, Major Second, Perfect Fourth
 * @LowContrast Minor Second, Major Second
 */
export const TypoScaleMap = {
    MinorSecond: 1.067,
    MajorSecond: 1.125,
    MinorThird: 1.2,
    MajorThird: 1.25,
    PerfectFourth: 1.333,
    AugmentedFourth: 1.414,
    PerfectFifth: 1.5,
    GoldenRatio: 1.618,
};
/**
 * @Bold Value for bold should be heavy enough. It makes contrast
 */
export const TypoWeight = {
    RegularLight: 300,
    Regular: 400,
    BoldLighter: 500,
    BoldLight: 600,
    Bold: 700,
    BoldStrong: 800,
};
/**
 * TypoScale can be used in certain unit such as px.
 * It has 9 levels from bottom to top.
 * Base scale is assigned to paragraph.
 * PerfectFourth is applied.
 */
export const BASE_SCALE = 12;
export const BASE_LINE_HEIGHT = 16;
