import { Alert, Platform, ToastAndroid } from 'react-native';

type MessageType = 'error' | 'success' | 'info';

export const showMessage = (message: string, type: MessageType = 'info', title?: string): void => {
  if (!message) return;

  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  } else {
    const alertTitle = title ?? (type === 'error' ? 'Error' : type === 'success' ? 'Success' : 'Info');
    Alert.alert(alertTitle, message);
  }
};
