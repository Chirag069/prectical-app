import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';
import { fs, sp } from '@utils/responsive';

interface CustomHeaderProps {
  title: string;
  subtitle?: string;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  style?: ViewStyle;
}

export default function CustomHeader({
  title,
  subtitle,
  rightComponent,
  leftComponent,
  style,
}: CustomHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + sp(12) }, style]}>
      <View style={styles.row}>
        {leftComponent && <View style={styles.side}>{leftComponent}</View>}
        <View style={styles.textBlock}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        {rightComponent && <View style={styles.side}>{rightComponent}</View>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: sp(16),
    paddingBottom: sp(16),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: fs(26),
    color: Colors.textPrimary,
    marginBottom: sp(4),
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: fs(16),
    color: Colors.textSubtle,
  },
  side: {
    justifyContent: 'center',
    paddingTop: sp(4),
  },
});
