import {homeStrings} from './homeStrings';

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
