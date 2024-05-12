/**
 * Depth is synonym for Elevation or Level or z-index.
 * Inspired by Atlassian elevation, gives semantic name for each depth.
 * https://atlassian.design/foundations/elevation/
 */
export type Depth = 'Deepest' | 'Deeper' | 'Deep' | 'Shallow' | 'Ground' | 'Land' | 'Hill';
export declare enum DepthLevel {
    zero = "Deepest",
    one = "Deeper",
    two = "Deep",
    three = "Shallow",
    four = "Ground",
    five = "Land",
    six = "Hill"
}
