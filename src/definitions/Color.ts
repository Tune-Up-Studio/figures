import {
  Palette,
  SemanticColorNames,
  Shades,
  Tints,
  Tones,
} from './Color.tokens';

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

/**
 * Get color collection.
 * @param color predefined colors, neutral, red, blue, green, yellow
 * @returns color collection for each.
 */
function getColorCollection(color: Color): ColorCollection {
  return {
    name: SemanticColorNames[color],
    palette: Palette[color],
    shades: Shades[color],
    tones: Tones[color],
    tints: Tints[color],
  };
}

export interface ColorFactory {
  getNeutralColors(): ColorCollection;
  getRedColors(): ColorCollection;
  getBlueColors(): ColorCollection;
  getGreenColors(): ColorCollection;
  getYellowColors(): ColorCollection;
}

/**
 * Create ColorFactory for each color.
 * @returns a ColorFactory for getting color collections.
 */
export function createColorFactory(): ColorFactory {
  return {
    getNeutralColors() {
      return getColorCollection(Color.NEUTRAL);
    },
    getRedColors() {
      return getColorCollection(Color.RED);
    },
    getBlueColors() {
      return getColorCollection(Color.BLUE);
    },
    getGreenColors() {
      return getColorCollection(Color.GREEN);
    },
    getYellowColors() {
      return getColorCollection(Color.YELLOW);
    },
  };
}
