export const COLORLEVELS = 10;
export var ColorVariation;
(function (ColorVariation) {
    ColorVariation["neutral"] = "neutral";
    ColorVariation["red"] = "red";
    ColorVariation["blue"] = "blue";
    ColorVariation["green"] = "green";
    ColorVariation["yellow"] = "yellow";
})(ColorVariation || (ColorVariation = {}));
export const Palette = {
    'neutral': [
        '#000000',
        '#302D38',
        '#726C86',
        '#918BA3',
        '#B5B1C2',
        '#FFFEFF',
    ],
    'red': [
        '#2C2C2C',
        '#624A47',
        '#AA4439',
        '#C63526',
        '#F21700',
        '#FF1800',
    ],
    'green': [
        '#202C16',
        '#5F6957',
        '#3C5627',
        '#627C4F',
        '#587C3C',
        '#629838',
    ],
    'blue': [
        '#999999',
        '#646188',
        '#373276',
        '#110B5C',
        '#140E65',
        '#060054',
    ],
    'yellow': [
        '#41320A',
        '#755606',
        '#AD7E05',
        '#C89100',
        '#EAA800',
        '#FFB700',
    ]
};
export const Shades = {
    'neutral': [
        '#000000',
        '#08070a',
        '#0f0e11',
        '#151417',
        '#19181c',
        '#1e1c22',
        '#222027',
        '#27242d',
        '#2b2932',
        '#302d38',
    ],
    'red': [
        '#000000',
        '#210e04',
        '#391508',
        '#52190a',
        '#6c1d0c',
        '#881f0c',
        '#a4200a',
        '#c22008',
        '#e01d05',
        '#FF1800',
    ],
    'green': [
        '#000000',
        '#11160b',
        '#1b2413',
        '#243319',
        '#2e421e',
        '#385223',
        '#426328',
        '#4d742e',
        '#578633',
        '#629838',
    ],
    'blue': [
        '#000000',
        '#06000f',
        '#0b0018',
        '#100020',
        '#120028',
        '#130031',
        '#120039',
        '#0f0042',
        '#0c004b',
        '#060054',
    ],
    'yellow': [
        '#000000',
        '#1f180a',
        '#372911',
        '#503b14',
        '#6b4e15',
        '#866116',
        '#a37615',
        '#c18b12',
        '#e0a10c',
        '#FFB700',
    ]
};
export const Tints = {
    'neutral': [
        '#ffffff',
        '#e5e5e7',
        '#cccccf',
        '#b4b3b7',
        '#9c9aa0',
        '#85838a',
        '#6e6c75',
        '#595660',
        '#44414b',
        '#302d38',
    ],
    'red': [
        '#ffffff',
        '#ffebe2',
        '#ffd6c6',
        '#ffc1aa',
        '#ffac8e',
        '#ff9674',
        '#ff7f59',
        '#ff663f',
        '#ff4824',
        '#FF1800',
    ],
    'green': [
        '#ffffff',
        '#eef3e8',
        '#dce8d1',
        '#cbdcbb',
        '#bad1a5',
        '#a8c58f',
        '#97ba79',
        '#86af64',
        '#74a34e',
        '#629838',
    ],
    'blue': [
        '#ffffff',
        '#e4dfeb',
        '#c9c0d8',
        '#aea2c4',
        '#9484b1',
        '#7a689e',
        '#604d8b',
        '#463379',
        '#2a1a66',
        '#060054',
    ],
    'yellow': [
        '#ffffff',
        '#fff7e7',
        '#ffefcf',
        '#ffe6b7',
        '#ffdea0',
        '#ffd688',
        '#ffce6f',
        '#ffc755',
        '#ffbf37',
        '#FFB700',
    ]
};
export const Tones = {
    'neutral': [
        '#808080',
        '#777678',
        '#6d6c6f',
        '#646367',
        '#5b595f',
        '#525057',
        '#49474f',
        '#413e47',
        '#383540',
        '#302d38',
    ],
    'red': [
        '#808080',
        '#937b73',
        '#a47567',
        '#b36f5a',
        '#c1674e',
        '#cf5f41',
        '#db5434',
        '#e84826',
        '#f33617',
        '#FF1800',
    ],
    'green': [
        '#808080',
        '#7e8379',
        '#7b8671',
        '#78886a',
        '#758b62',
        '#728e5b',
        '#6f9053',
        '#6b934a',
        '#679542',
        '#629838',
    ],
    'blue': [
        '#808080',
        '#75717c',
        '#696277',
        '#5e5372',
        '#52456e',
        '#463769',
        '#3a2a64',
        '#2c1c5f',
        '#1c0f59',
        '#060054',
    ],
    'yellow': [
        '#808080',
        '#908678',
        '#9f8c6f',
        '#ae9266',
        '#bc985d',
        '#c99e52',
        '#d7a447',
        '#e4aa39',
        '#f2b127',
        '#FFB700',
    ]
};
/**
 * Colors have 6 levels.
 * Each is a integer from 0 to 5.
 * As level rises, color gets brighter.
 */
export const COLOR_LEVELS = 6;
const SemanticColorNames = {
    'red': 'MeltingFlame',
    'blue': 'FreezingSea',
    'green': 'CalmLeaf',
    'yellow': 'TwinkeStar',
    'neutral': 'Neutral'
};
export var Color;
(function (Color) {
    Color["NEUTRAL"] = "neutral";
    Color["RED"] = "red";
    Color["BLUE"] = "blue";
    Color["GREEN"] = "green";
    Color["YELLOW"] = "yellow";
})(Color || (Color = {}));
/**
 *
 * @param color
 * @returns
 */
function getColorCollection(color) {
    return {
        'name': SemanticColorNames[color],
        'palette': Palette[color],
        'shades': Shades[color],
        'tones': Tones[color],
        'tints': Tints[color]
    };
}
/**
 *
 * @returns a ColorFactory for getting color collections.
 */
export function colorFactory() {
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
        }
    };
}