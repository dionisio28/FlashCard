import React from 'react';
import Tts from 'react-native-tts';
import Navigation from './src/routes/navigation';

Tts.setDefaultLanguage('en-US');

const App: React.FC = () => {
  return <Navigation />;
};

export default App;
