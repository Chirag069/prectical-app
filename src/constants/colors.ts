export const Colors = {
  // Brand
  primary:        '#4CAF50',
  facebook:       '#1877F2',
  greenLight:     '#21D393',

  // Text
  textPrimary:    '#1A1A1A',
  textSecondary:  '#555',
  textMuted:      '#888',
  textSubtle:     '#666',
  textPrice:      '#333',
  textTag:        '#181A1F',

  

  // Backgrounds
  white:          '#fff',
  heroBg:         '#D9D9D9',
  screenBg:       '#f5f5f5',
  thumbBg:        '#ccc',
  bgTag:          '#F5F7FC',
  black:          '#000',

  // Borders & dividers
  border:         '#4f4f4f',
  borderLight:    '#F0F0F0',
  borderMuted:    '#ccc',
  heroBorder:     '#555',

  // Input / icon
  placeholder:    '#828282',

  // Shadow
  shadow:         '#000',
} as const;

export type ColorName = keyof typeof Colors;
