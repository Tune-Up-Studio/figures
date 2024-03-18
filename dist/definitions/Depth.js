/**
 * Depth is synonym for Elevation or Level or z-index.
 * Inspired by Atlassian elevation, gives semantic name for each depth.
 * https://atlassian.design/foundations/elevation/
 */
export const DEPTHS = 6;
export var DepthLevel;
(function (DepthLevel) {
    DepthLevel["zero"] = "Basement";
    DepthLevel["one"] = "Lobby";
    DepthLevel["two"] = "First";
    DepthLevel["three"] = "Second";
    DepthLevel["four"] = "Third";
    DepthLevel["five"] = "Roof";
})(DepthLevel || (DepthLevel = {}));
export const Depth = {
    Basement: 1,
    Lobby: 10,
    First: 20,
    Second: 30,
    Third: 60,
    Roof: 100,
};
