/**
 * Depth is synonym for Elevation or Level or z-index.
 * Inspired by Atlassian elevation, gives semantic name for each depth.
 * https://atlassian.design/foundations/elevation/
 */
export declare const DEPTHS = 6;
export type Depth = 'Basement' | 'Lobby' | 'First' | 'Second' | 'Third' | 'Roof';
export declare enum DepthLevel {
    zero = "Basement",
    one = "Lobby",
    two = "First",
    three = "Second",
    four = "Third",
    five = "Roof"
}
export declare const Depth: {
    Basement: number;
    Lobby: number;
    First: number;
    Second: number;
    Third: number;
    Roof: number;
};
