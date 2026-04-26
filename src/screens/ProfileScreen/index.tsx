import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppDispatch } from '@hooks/redux';
import { logout } from '@features/auth/authSlice';
import { clearWishlist } from '@features/wishlist/wishlistSlice';
import CustomButton from '@components/CustomButton';
import { Colors } from '@constants/colors';
import { sp } from '@utils/responsive';

export default function ProfileScreen() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearWishlist());
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <CustomButton
        label="Logout"
        onPress={handleLogout}
        backgroundColor={Colors.black}
        style={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.screenBg, padding: sp(24) },
  btn:       { width: '100%' },
});
