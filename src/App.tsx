import React, {useEffect} from 'react';
import Tts from 'react-native-tts';
import Navigation from './routes/navigation';
import {configureInitialLanguage} from './utils/language';
Tts.setDefaultLanguage('en-US');

const App: React.FC = () => {
  useEffect(() => {
    configureInitialLanguage();
  }, []);
  return <Navigation />;
};

export default App;
