import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/app/store';
import AppNavigator from './src/navigation/AppNavigator';
import { Colors } from './src/constants/colors';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        }
        persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
