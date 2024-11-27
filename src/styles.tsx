import { Platform } from 'react-native';
import { scale } from './utils/platformUtils';

export const color = {
  primaryBlue: '#2088e6',
  backgroundGreen: '#009688',
  white: '#FFFFFF',
};

export const isAndroid = () => Platform.OS === 'android';

export const STATUSBAR_HEIGHT = isAndroid() ? scale(24) : scale(50);
