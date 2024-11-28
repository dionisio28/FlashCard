import {homeStrings} from './homeStrings';

// type appLanguageCode = 'pt' | 'en' | 'es';

const setAppLanguage = (languageCode: string) => {

  console.log('languageCode', languageCode);
  let appLanguageCode = languageCode;

  homeStrings.setLanguage(appLanguageCode);
};

const getDeviceLanguage = () => {
  const deviceLanguage = homeStrings.getLanguage();
  return deviceLanguage;
};

export {homeStrings, setAppLanguage, getDeviceLanguage};
