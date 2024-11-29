import { Platform } from 'react-native';
import { scale } from './utils/platformUtils';

export const color = {
  primaryBlue: '#42a5f6',
  backgroundGreen: '#009688',
  warning: '#FFC107',
  danger: '#FF5252',
  white: '#FFFFFF',
  background: '#FFFFFF',
  darkGray: '#666666',
  lightGray: '#888888',
  opacityGray: '#ddd',
  black: '#242424',
  lightBlack: '#363636',
};

export const isAndroid = () => Platform.OS === 'android';

export const STATUSBAR_HEIGHT = isAndroid() ? scale(12) : scale(50);
