import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Fonts } from '@constants/fonts';
import { Colors } from '@constants/colors';
import { fs, sp, radius } from '@utils/responsive';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function CustomButton({
  label,
  onPress,
  loading = false,
  disabled = false,
  backgroundColor = Colors.greenLight,
  textColor = Colors.white,
  style,
  textStyle,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor }, (disabled || loading) && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}>
      {loading
        ? <ActivityIndicator color={textColor} />
        : <Text style={[styles.label, { color: textColor }, textStyle]}>{label}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: radius(5),
    paddingVertical: sp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontFamily: Fonts.semiBold,
    fontSize: fs(16),
  },
});
