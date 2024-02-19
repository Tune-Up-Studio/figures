/**
 * Depth is synonym for Elevation or Level or z-index.
 * Inspired by Atlassian elevation, gives semantic name for each depth.
 * https://atlassian.design/foundations/elevation/
 */
export const DEPTHS = 6;
export type Depth = 'Basement' | 'Lobby' | 'First' | 'Second' | 'Third' | 'Roof';

export enum DepthLevel {
  zero = 'Basement',
  one = 'Lobby',
  two = 'First',
  three = 'Second',
  four = 'Third',
  five = 'Roof'
}

export const Depth = {
  Basement: 1,
  Lobby: 10,
  First: 20,
  Second: 30,
  Third: 60,
  Roof: 100
}

