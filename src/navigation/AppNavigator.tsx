import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes, type RootStackParamList } from '@navigation/routes';
import LoginScreen from '@screens/LoginScreen';
import MainTabNavigator from '@navigation/MainTabNavigator';
import { useAppSelector } from '@hooks/redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const token = useAppSelector(state => state.auth.token);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        ) : (
          <Stack.Screen name={Routes.Login} component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
