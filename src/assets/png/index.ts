const PNGs = {
  googleLogo:  require('./btn_google_light_normal_ios 1.png'),
  appleLogo:   require('./Logo - SIWA - Logo-only - Black 1.png'),
  facebookLogo: require('./2D9839980-facebooklogo 1.png'),
} as const;

export type PngName = keyof typeof PNGs;

export default PNGs;
