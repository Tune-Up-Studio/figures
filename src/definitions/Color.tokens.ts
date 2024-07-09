/**
 * SimpleSwatch provides simple colors used when multi-leveled variation is not required.
 * Each color gets brighter and more saturated in ascending order.
 */
export const SimpleSwatch = {
  neutral: ['#000000', '#302D38', '#726C86', '#918BA3', '#B5B1C2', '#FFFEFF'],
  red: ['#2C2C2C', '#624A47', '#AA4439', '#C63526', '#F21700', '#FF1800'],
  green: ['#202C16', '#5F6957', '#3C5627', '#627C4F', '#587C3C', '#629838'],
  blue: ['#999999', '#646188', '#373276', '#110B5C', '#140E65', '#060054'],
  yellow: ['#41320A', '#755606', '#AD7E05', '#C89100', '#EAA800', '#FFB700'],
};
/**
 * Color varys in 10 levels.
 * Color swatches use 10 this levels.
 */
export const VARIATION_LEVELS = 10;

/**
 * Each color swatch has 3 sub-classes, Shades, Tints, Tones.
 *
 * Shades are 10-levled colors, getting lighter in ascending order.
 * Every color starts from #000000 at index 0.
 *
 * Tints are 10-levled colors, getting lighter in descending order.
 * The more index increase, the more saturated.
 * Every color starts from #ffffff at index 0.
 *
 * Tones are 10-levled colors, getting lighter in ascending order.
 * The more index increase, the more saturated.
 * Every color starts from #808080 at index 0.
 */
export interface SwatchVariants {
  shades: readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  tints: readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  tones: readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
}
export interface ColorSwatches {
  neutral: SwatchVariants;
  redOrange: SwatchVariants;
  red: SwatchVariants;
  reddishBrown: SwatchVariants;
  blue: SwatchVariants;
  reefTeal: SwatchVariants;
  green: SwatchVariants;
  limeGreen: SwatchVariants;
  yellow: SwatchVariants;
}
export const Swatches: ColorSwatches = {
  neutral: {
    /**
     * #000000
      #08070a
      #0f0e11
      #151417
      #19181c
      #1e1c22
      #222027
      #27242d
      #2b2932
      #302d38 */
    shades: [
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
    /**
     * #ffffff
      #e5e5e7
      #cccccf
      #b4b3b7
      #9c9aa0
      #85838a
      #6e6c75
      #595660
      #44414b
      #302d38
     */
    tints: [
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
    /**
     * #808080
      #777678
      #6d6c6f
      #646367
      #5b595f
      #525057
      #49474f
      #413e47
      #383540
      #302d38
     */
    tones: [
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
  },
  redOrange: {
    /**
     * #000000
      #220d12
      #3c101c
      #580e22
      #740927
      #910028
      #ae0027
      #ca0022
      #e50019
      #ff1900
     */
    shades: [
      '#000000',
      '#220d12',
      '#3c101c',
      '#580e22',
      '#740927',
      '#910028',
      '#ae0027',
      '#ca0022',
      '#e50019',
      '#ff1900',
    ],
    /**
     * '#ffffff'
      '#ffe9ef'
      '#ffd4dd'
      '#ffc0c9'
      '#ffacb3'
      '#ff979a'
      '#ff807d'
      '#ff645d'
      '#ff3f33'
      '#ff1900'
     */
    tints: [
      '#ffffff',
      '#ffe9ef',
      '#ffd4dd',
      '#ffc0c9',
      '#ffacb3',
      '#ff979a',
      '#ff807d',
      '#ff645d',
      '#ff3f33',
      '#ff1900',
    ],
    tones: [
      '#808080',
      '#95797f',
      '#a8727b',
      '#ba6975',
      '#ca5f6b',
      '#d9535e',
      '#e6474f',
      '#f0393d',
      '#f92a26',
      '#ff1900',
    ],
  },
  red: {
    shades: [
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
    tints: [
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
    tones: [
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
  },
  reddishBrown: {
    shades: [
      '#000000',
      '#0e0104',
      '#1d0309',
      '#2b040d',
      '#3a0612',
      '#480716',
      '#57091b',
      '#650a1f',
      '#740c24',
      '#820d28',
    ],
    tints: [
      '#ffffff',
      '#f1e4e7',
      '#e3c9cf',
      '#d5aeb7',
      '#c7939f',
      '#ba7988',
      '#ac5e70',
      '#9e4358',
      '#902840',
      '#820d28',
    ],
    tones: [
      '#808080',
      '#807376',
      '#80666c',
      '#815a63',
      '#814d59',
      '#81404f',
      '#813345',
      '#82273c',
      '#821a32',
      '#820d28',
    ],
  },
  blue: {
    shades: [
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
    tints: [
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
    tones: [
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
  },
  reefTeal: {
    shades: [
      '#000000',
      '#110b0e',
      '#1a141a',
      '#211a25',
      '#262231',
      '#272b3e',
      '#25354a',
      '#1e3f55',
      '#12495c',
      '#005461',
    ],
    tints: [
      '#ffffff',
      '#eee8eb',
      '#dbd1d9',
      '#c5bcca',
      '#ada8bc',
      '#9296ad',
      '#74849e',
      '#55748c',
      '#326478',
      '#005461',
    ],
    tones: [
      '#808080',
      '#7e797b',
      '#7a7179',
      '#746b78',
      '#6a6678',
      '#5e6177',
      '#4e5e76',
      '#3b5b72',
      '#24576b',
      '#005461',
    ],
  },
  green: {
    shades: [
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
    tints: [
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
    tones: [
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
  },
  limeGreen: {
    shades: [
      '#000000',
      '#201315',
      '#3a1e1e',
      '#532a24',
      '#6b3927',
      '#814b26',
      '#926022',
      '#9f771c',
      '#a69113',
      '#a7ac11',
    ],
    tints: [
      '#ffffff',
      '#fff0f2',
      '#ffe1e0',
      '#ffd3c9',
      '#ffc7af',
      '#ffbd93',
      '#f3b675',
      '#dfb156',
      '#c6ae37',
      '#a7ac11',
    ],
    tones: [
      '#808080',
      '#928082',
      '#a37f7f',
      '#b28077',
      '#bd826c',
      '#c4865e',
      '#c58d4e',
      '#c1963c',
      '#b7a028',
      '#a7ac11',
    ],
  },
  yellow: {
    shades: [
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
    ],
    tints: [
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
    ],
    tones: [
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
    ],
  },
};
