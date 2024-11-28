import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDeviceLanguage, setAppLanguage} from '../locales';

export const configureInitialLanguage = async () => {
  try {
    const languageCode = await AsyncStorage.getItem('languageCode');
    if (languageCode) {
      setAppLanguage(languageCode);
    } else {
      const deviceLanguage = getDeviceLanguage();
      setAppLanguage(deviceLanguage);
      await AsyncStorage.setItem('languageCode', deviceLanguage);
    }
  } catch (error) {}
};
