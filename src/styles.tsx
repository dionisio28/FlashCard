import { Platform } from 'react-native';
import { scale } from './utils/platformUtils';

export const color = {
  primaryBlue: '#42a5f6',
  backgroundGreen: '#009688',
  white: '#FFFFFF',
  background: '#FFFFFF',
  darkGray: '#666666',
  lightGray: '#888888',
  opacityGray: '#ddd',
  black: '#010101',
  lightBlack: '#242323',
};

export const isAndroid = () => Platform.OS === 'android';

export const STATUSBAR_HEIGHT = isAndroid() ? scale(12) : scale(50);
