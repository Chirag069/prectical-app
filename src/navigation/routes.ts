// ─── Single source of truth for all screen names ───────────────────────────

export const Routes = {
  // Auth stack
  Login: 'Login',

  // Main tab screens
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
