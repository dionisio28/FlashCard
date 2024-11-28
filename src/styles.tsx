import { Platform } from 'react-native';
import { scale } from './utils/platformUtils';

export const color = {
  primaryBlue: '#2088e6',
  backgroundGreen: '#009688',
  white: '#FFFFFF',
  darkGray: '#666666',
};

export const isAndroid = () => Platform.OS === 'android';

export const STATUSBAR_HEIGHT = isAndroid() ? scale(12) : scale(50);
