import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../styles';
import {scale} from '../../utils/platformUtils';
import {homeStrings} from '../../locales';

interface ButtonProps {
  onPress: () => void;
}

const Button = ({onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{homeStrings.creatFlashcard}</Text>
      <Icon name={'add'} color={color.white} size={scale(24)} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primaryBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    marginBottom: 24,
    width: '80%',
    padding: 6,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: scale(16),
    padding: 2,
    marginRight: 2,
    fontWeight: 'bold',
    color: color.white,
  },
});
