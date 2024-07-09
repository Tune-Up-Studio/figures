export type Colors = string[];

export enum ColorVariation {
  neutral = 'neutral',
  red = 'red',
  blue = 'blue',
  green = 'green',
  yellow = 'yellow',
}

export enum Color {
  NEUTRAL = 'neutral',
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
}

export interface ColorCollection {
  name: string;
  palette: Colors;
  shades: Colors;
  tones: Colors;
  tints: Colors;
}

export type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export interface ColorMap {
  of(level: ColorLevel): string;
}

export interface ColorFactory {
  getNeutralColors(): ColorCollection;
  getRedColors(): ColorCollection;
  getBlueColors(): ColorCollection;
  getGreenColors(): ColorCollection;
  getYellowColors(): ColorCollection;
}

/**
 * SemanticColors have 6 levels.
 * Each is an integer from 0 to 5.
 * As level rises, color gets brighter.
 */
export const SemanticColorNames = {
  red: 'MeltingFlame',
  blue: 'FreezingSea',
  green: 'CalmLeaf',
  yellow: 'TwinkleStar',
  neutral: 'Neutral',
};
