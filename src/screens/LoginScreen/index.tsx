import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@navigation/routes';
import { Routes } from '@navigation/routes';
import AppInput from '@components/AppInput';
import CustomButton from '@components/CustomButton';
import SocialButton from '@components/SocialButton';
import { Fonts } from '@constants/fonts';
import { Colors } from '@constants/colors';
import { wp, hp, fs, sp, radius } from '@utils/responsive';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { login } from '@features/auth/authSlice';
import { showMessage } from '@utils/showMessage';
import PNGs from '@png';
import { SVGs } from '@svg';

type Props = NativeStackScreenProps<RootStackParamList, typeof Routes.Login>;

export default function LoginScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(s => s.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      showMessage('Please enter email and password', 'error');
      return;
    }
    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      showMessage('You have logged in successfully!', 'success');
      navigation.replace('MainTabs');
    } else {
      showMessage(result.payload as string, 'error', 'Login Failed');
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.hero}>
        <Text style={styles.logoText}>Plīē</Text>
        <View style={styles.heroImagePlaceholder}>
          <SVGs.Icon width={wp(40)} height={wp(40)} />
        </View>
      </View>

      <ScrollView
        style={styles.sheet}
        contentContainerStyle={styles.sheetContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AppInput
          label="Email"
          placeholder="email@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <AppInput
          label="Password"
          placeholder="Password"
          isPassword
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.forgotRow}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <CustomButton
          label="Sign In"
          onPress={handleLogin}
          loading={loading}
          style={styles.signInBtn}
        />

        <View style={styles.signUpRow}>
          <Text style={styles.signUpText}>Not a member? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}>Sign Up Here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or Sign In with:</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialRow}>
          <SocialButton source={PNGs.googleLogo} onPress={() => {}} size={44} />
          <SocialButton source={PNGs.appleLogo} onPress={() => {}} size={44} />
          <SocialButton
            source={PNGs.facebookLogo}
            onPress={() => {}}
            size={44}
          />
        </View>

        <TouchableOpacity
          style={styles.guestRow}
          onPress={() => navigation.replace('MainTabs')}
        >
          <Text style={styles.guestText}>Enter as Guest</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.heroBg },
  hero: {
    height: hp(280),
    backgroundColor: Colors.heroBg,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: hp(40),
    paddingBottom: hp(24),
  },
  logoText: {
    fontFamily: Fonts.bold,
    fontSize: fs(52),
    color: Colors.textPrimary,
    letterSpacing: 2,
  },
  heroImagePlaceholder: {
    width: wp(80),
    height: wp(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheet: { flex: 1, backgroundColor: Colors.white },
  sheetContent: {
    paddingHorizontal: sp(24),
    paddingTop: sp(28),
    paddingBottom: sp(40),
  },
  forgotRow: {
    alignItems: 'flex-end',
    marginTop: sp(-15),
    marginBottom: sp(20),
  },
  forgotText: {
    fontFamily: Fonts.regular,
    fontSize: fs(12),
    color: Colors.placeholder,
  },
  signInBtn: { marginBottom: sp(16) ,width: '30%', alignSelf: 'flex-end',paddingVertical: sp(5)},
  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: sp(32),
  },
  signUpText: {
    fontFamily: Fonts.regular,
    fontSize: fs(12),
    color: Colors.black,
  },
  signUpLink: {
    fontFamily: Fonts.semiBold,
    fontSize: fs(12),
    color: Colors.textPrimary,
    textDecorationLine: 'underline',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sp(28),
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: Colors.border },
  dividerText: {
    fontFamily: Fonts.regular,
    fontSize: fs(13),
    color: Colors.border,
    marginHorizontal: sp(10),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: sp(16),
    marginBottom: sp(32),
  },
  facebookBtn: {
    backgroundColor: Colors.facebook,
    borderColor: Colors.facebook,
  },
  guestRow: { alignItems: 'flex-end' },
  guestText: {
    fontFamily: Fonts.regular,
    fontSize: fs(12),
    color: Colors.placeholder,
  },
});
