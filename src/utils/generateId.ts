import uuid from 'react-native-uuid';

const generateId = (): string => {
  return uuid.v4();
};

export default generateId;
