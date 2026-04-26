import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

// Base design dimensions (iPhone 14 Pro = 390 x 844)
const BASE_W = 390;
const BASE_H = 844;

/** Responsive width — scales px value relative to screen width */
export const wp = (px: number): number =>
  PixelRatio.roundToNearestPixel((px / BASE_W) * SCREEN_W);

/** Responsive height — scales px value relative to screen height */
export const hp = (px: number): number =>
  PixelRatio.roundToNearestPixel((px / BASE_H) * SCREEN_H);

/** Responsive font size */
export const fs = (size: number): number => {
  const scale = SCREEN_W / BASE_W;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

/** Responsive spacing (width-based) */
export const sp = (px: number): number =>
  PixelRatio.roundToNearestPixel((px / BASE_W) * SCREEN_W);

/** Responsive border radius */
export const radius = (px: number): number =>
  PixelRatio.roundToNearestPixel((px / BASE_W) * SCREEN_W);

/** Raw screen dimensions */
export const Screen = {
  width:  SCREEN_W,
  height: SCREEN_H,
} as const;
