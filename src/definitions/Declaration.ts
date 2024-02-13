// export const themeDeclaration: ThemeSignature = {

import { TypoVariant } from "./Typography";

// }
/**
 * ThemeSignature is a statemnt that state properties refer to common styles for components in figures.
 * Styles are grouped by component.
 * 
 */
export interface ThemeSignature {
  typo: {
    title: TypoVariant;
    subtitle: TypoVariant;
    paragraph: TypoVariant;
  }
  structures: {
    stack: StackVariant;
    frame: FrameVariant;
    layered: SizeVariant & LayerVariant;
  }
}

export interface SizeVariant {
  width?: number;
  height?: number;
}

export interface LayerVariant {
  level: number;
}

export interface Gap {
  minGapBetween: number;
}

export interface StackVariant extends SizeVariant, Gap{
  alignment: Portrait | Landscape;
}

export interface FrameVariant extends SizeVariant, Gap {
  rows: number;
  cols: number;
}


type Portrait = 'column';
type Landscape = 'row';
