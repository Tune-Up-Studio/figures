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
const TYPOSIZE_RELATIVE_DEFAULT: Readonly<string> = '1rem';
const TYPOSIZE_WEB_DEFAULT: Readonly<string> = '1em';
const TYPOSIZE_FIXED_DEFAULT: Readonly<string> = '12px';
const TYPO_LINEHEIGHT_DEFAULT: Readonly<string> = '16px';
const TYPO_LETTERSPACING_DEFAULT: Readonly<number> = 0;

/**
 * @HighContrast Augmented Fourth, Perfect Fifth, Golden Ratio
 * @MidContrast Major Third, Major Second, Perfect Fourth
 * @LowContrast Minor Second, Major Second
 */
export const TypoScaleMap: Readonly<Record<string, number>> = {
  MinorSecond: 1.067,
  MajorSecond: 1.125,
  MinorThird: 1.2,
  MajorThird: 1.25,
  PerfectFourth: 1.333,
  AugmentedFourth: 1.414,
  PerfectFifth: 1.5,
  GoldenRatio: 1.618,
};

export type TypoVariant = {
  fontSize?: string;
  fontWeight?: '300' | '400' | '500' | '600' | '700' | '800';
  fontStyle?: 'normal' | 'italic' | 'bold';
};
export type FontStyle = 'normal' | 'italic' | 'bold';
export type FontWeight = '300' | '400' | '500' | '600' | '700' | '800';

/**
 * @Bold Value for bold should be heavy enough. It makes contrast
 */
export const TypoWeight: Readonly<Record<string, number>> = {
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

export enum TypoScale {
  XXXL = 120,
  XXL = 90,
  XL = 67,
  L = 51,
  M = 38,
  SM = 28,
  XSM = 21,
  XXSM = 16,
  XXXSM = 12,
}
