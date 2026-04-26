import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes, type MainTabParamList } from '@navigation/routes';
import SearchScreen from '@screens/SearchScreen';
import EventsScreen from '@screens/EventsScreen';
import FavouritesScreen from '@screens/FavouritesScreen';
import ProfileScreen from '@screens/ProfileScreen';
import { SVGs } from '@svg';
import { fs } from '@utils/responsive';

const Tab = createBottomTabNavigator<MainTabParamList>();

const ACTIVE   = '#000000';
const INACTIVE = '#999999';

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ACTIVE,
        tabBarInactiveTintColor: INACTIVE,
      }}>
      <Tab.Screen
        name={Routes.Search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SVGs.Search width={fs(22)} height={fs(22)}  />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Events}
        component={EventsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SVGs.Event width={fs(22)} height={fs(22)}  />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Favourites}
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SVGs.HeartOutline width={fs(22)} height={fs(22)} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SVGs.User width={fs(22)} height={fs(22)}  />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
