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
export type TypoVariant = {
    fontSize?: string;
    fontWeight?: '300' | '400' | '500' | '600' | '700' | '800';
    fontStyle?: 'normal' | 'italic' | 'bold';
};
export type FontStyle = 'normal' | 'italic' | 'bold';
export type FontWeight = '300' | '400' | '500' | '600' | '700' | '800';
/**
 * TypoScale can be used in certain unit such as px.
 * It has 9 levels from bottom to top.
 * Base scale is assigned to paragraph.
 * PerfectFourth is applied.
 */
export declare enum TypoScale {
    XXXL = 120,
    XXL = 90,
    XL = 67,
    L = 51,
    M = 38,
    SM = 28,
    XSM = 21,
    XXSM = 16,
    XXXSM = 12
}
