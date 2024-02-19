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
export declare const TypoWeight: Readonly<Record<string, number>>;
/**
 * TypoScale can be used in certain unit such as px.
 * It has 9 levels from bottom to top.
 * Base scale is assigned to paragraph.
 * PerfectFourth is applied.
 */
export declare const BASE_SCALE = 12;
export declare const BASE_LINE_HEIGHT = 16;
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
