import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Routes, type MainTabParamList } from '@navigation/routes';
import SearchScreen from '@screens/SearchScreen';
import EventsScreen from '@screens/EventsScreen';
import FavouritesScreen from '@screens/FavouritesScreen';
import ProfileScreen from '@screens/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const TAB_ICONS: Record<string, string> = {
  [Routes.Search]: '🔍',
  [Routes.Events]: '📅',
  [Routes.Favourites]: '♡',
  [Routes.Profile]: '👤',
};

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => <Text style={{ fontSize: 18 }}>{TAB_ICONS[route.name]}</Text>,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
      })}>
      <Tab.Screen name={Routes.Search} component={SearchScreen} />
      <Tab.Screen name={Routes.Events} component={EventsScreen} />
      <Tab.Screen name={Routes.Favourites} component={FavouritesScreen} />
      <Tab.Screen name={Routes.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
