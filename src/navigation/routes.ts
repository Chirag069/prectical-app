export const Routes = {
  Login: 'Login',
  Search: 'Search',
  Events: 'Events',
  Favourites: 'Favourites',
  Profile: 'Profile',
} as const;

export type RootStackParamList = {
  [Routes.Login]: undefined;
  MainTabs: undefined;
};

export type MainTabParamList = {
  [Routes.Search]: undefined;
  [Routes.Events]: undefined;
  [Routes.Favourites]: undefined;
  [Routes.Profile]: undefined;
};
