/**
 * Depth is synonym for Elevation or Level or z-index.
 * Inspired by Atlassian elevation, gives semantic name for each depth.
 * https://atlassian.design/foundations/elevation/
 */
export type Depth = 'Basement' | 'Lobby' | 'First' | 'Second' | 'Third' | 'Roof';
export declare enum DepthLevel {
    zero = "Basement",
    one = "Lobby",
    two = "First",
    three = "Second",
    four = "Third",
    five = "Roof"
}
