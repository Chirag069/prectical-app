import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

const BASE_W = 390;
const BASE_H = 844;

export const wp = (px: number): number =>
  PixelRatio.roundToNearestPixel((px / BASE_W) * SCREEN_W);

export const hp = (px: number): number =>
  PixelRatio.roundToNearestPixel((px / BASE_H) * SCREEN_H);

export const fs = (size: number): number => {
  const scale = SCREEN_W / BASE_W;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export const sp = (px: number): number =>
  PixelRatio.roundToNearestPixel((px / BASE_W) * SCREEN_W);

export const radius = (px: number): number =>
  PixelRatio.roundToNearestPixel((px / BASE_W) * SCREEN_W);

export const Screen = {
  width:  SCREEN_W,
  height: SCREEN_H,
} as const;
