import * as Keychain from 'react-native-keychain';

const SERVICE = 'demoapp_auth';

export const secureStorage = {
  setToken: (key: string, value: string) =>
    Keychain.setGenericPassword(key, value, {
      service: `${SERVICE}_${key}`,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    }),

  getToken: async (key: string): Promise<string | null> => {
    const result = await Keychain.getGenericPassword({ service: `${SERVICE}_${key}` });
    return result ? result.password : null;
  },

  removeToken: (key: string) =>
    Keychain.resetGenericPassword({ service: `${SERVICE}_${key}` }),
};
