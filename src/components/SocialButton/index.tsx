import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import { Colors } from '@constants/colors';
import { wp, fs, radius } from '@utils/responsive';

interface SocialButtonProps {
  source: ImageSourcePropType;
  onPress: () => void;
  style?: ViewStyle;
  size?: number;
}

export default function SocialButton({ source, onPress, style, size = 32 }: SocialButtonProps) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress} activeOpacity={0.7}>
      <Image source={source} style={{ width: fs(size), height: fs(size), resizeMode: 'cover' }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: wp(56),
    height: wp(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
