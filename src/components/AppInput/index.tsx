import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { Fonts } from '@constants/fonts';
import { Colors } from '@constants/colors';
import { fs, sp, radius } from '@utils/responsive';

interface AppInputProps extends TextInputProps {
  label: string;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
}

export default function AppInput({
  label,
  containerStyle,
  isPassword = false,
  ...rest
}: AppInputProps) {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.placeholder}
          secureTextEntry={secure}
          autoCapitalize="none"
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity style={styles.eyeBtn} onPress={() => setSecure(p => !p)}>
            {secure
              ? <EyeOff size={fs(18)} color={Colors.placeholder} />
              : <Eye    size={fs(18)} color={Colors.placeholder} />
            }
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: sp(16),
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize: fs(15),
    color: Colors.textPrimary,
    marginBottom: sp(8),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius(10),
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingHorizontal: sp(14),
    fontFamily: Fonts.regular,
    fontSize: fs(14),
    color: Colors.textPrimary,
  },
  eyeBtn: {
    paddingHorizontal: sp(12),
    paddingVertical: sp(13),
  },
});
