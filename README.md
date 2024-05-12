<h1 align="center">Figures</h1>
Definitions for design components.  
Not components depend on certain library or framework, only the definitions and utility functions are served.

# Table of Contents

- [Further Objectives](#further-objectives)
- [Why Definitions?](#why-definitions)
- [Style Definitions](#style-definitions)

## Why Definitions?

In my respect of making web ui, there are my own terminology to describe
how the ui component should look and feel. It is somewhat different from just using
common terminology referring CSS Declaration.
For example, I want to call z-index as depth or level. With this terminological disparity,
there are some difficulties when apply design scheme to existing web style scheme.  
This library provides predefined design & style declaration and terminology for reusing
design theme and terms over and over.

This library helps reusing style values for all other style applications such as component library,
framework, design tools etc.

Design scheme or paradigm or pattern is composed of some consistent elements and under certain semantic
theme. To apply this through a number of projects, I decide to introduce this constant style declaration
for my own style system.

# Style Definitions

- [Color](#color)
- [Curve](#curve)
- [Depth](#depth)
- [Space](#space)
- [Thickness](#thickness)
- [Typography](#typography)

## Color

Color varies in levels of 10.  
Which means if a "definition" of a "variation of color" exists, it has 10 levels from the least to the most.

Colors have 5 major hues.

- neutral
- red
- blue
- green
- yellow

Colors have 4 variants, each has different meaning.

- Palette: Set of colors varies linearly in saturation.
- Shades: Set of color varies linearly in brightness from darkest to mid.
- Tints: Set of color varies linearly in brightness from lightest to mid.
- Tones: Set of color varies linearly in saturation and brightness from lowest to mid.

Each color has its own semantic color name.

- _MeltingFlame_ for red.
- _FreezingSea_ for blue.
- _CalmLeaf_ for green.
- _TwinkleStar_ for yellow.
- _Neutral_ for neutral.

Function for getting each color collection is also provided.

## Curve

Curve has 6 levels.  
Curve varies as following, from 0 to 5.
Each level has its own weight.

- Slighter: 1
- Slight: 10
- Lighter: 20
- Tight: 30
- Tighter: 60
- Full: 100

## Depth

Depth has 7 levels.
Depth varies as following, from 0 to 6.
Each level has its own weight.

- Deepest: 1
- Deeper: 10
- Deep: 20
- Shallow: 30
- Ground: 50
- Land: 60
- Hill: 100

## Thickness

Thickness has 5 levels.
Thickness varies as following, from 0 to 4.
Each level has its own weight.

- Thiner: 1
- Thin: 10
- Mid: 12.5
- Thick: 15
- Thicker: 20

## Space

Space has 10 levels.
Space usually used with units such as 'px', 'em'.

Space comes with helping functions to set space dynamically.

Space has no semantic names or weight.
Space aligns naturally with numbers.

## Typography

Typography follows certain typographic scale.
Typography in Figures follows **_"Perfect Fourth"_** scale.
Typography scales are named in 9 levels, from XXXSM to XXXL.

```
  XXXL = 120,
  XXL = 90,
  XL = 67,
  L = 51,
  M = 38,
  SM = 28,
  XSM = 21,
  XXSM = 16,
  XXXSM = 12,
```

Weight for Typography follows numeric values as CSS, and has
quantized value.

```
  RegularLight: 300,
  Regular: 400,
  BoldLighter: 500,
  BoldLight: 600,
  Bold: 700,
  BoldStrong: 800,
```

Font Style only has 'normal', 'italic', 'bold'.

## Further Objectives

To compose components in fast and predictable way, IoC(Inversion of Control) is required in some situations.
For example, if some components inside of another component featuring layout or structure just follow the container's rule, it would be very predictable.
