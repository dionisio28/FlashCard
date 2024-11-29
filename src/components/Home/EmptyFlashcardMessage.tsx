import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../styles';
import {scale} from '../../utils/platformUtils';
import Button from '../shared/Button';
import {homeStrings} from '../../locales';

interface EmptyFlashcardMessageProps {
  onPress: () => void;
}

const EmptyFlashcardMessage = ({onPress}: EmptyFlashcardMessageProps) => {
  return (
    <View style={styles.container}>
      <Icon name="menu-book" color={color.lightGray} size={scale(88)} />
      <Text style={styles.title}>{homeStrings.noFlashcardsTitle}</Text>
      <Text style={styles.description}>
        {homeStrings.noFlashcardsDescription}
      </Text>
      <Button onPress={onPress} />
    </View>
  );
};

export default EmptyFlashcardMessage;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    position: 'absolute',
    bottom: scale(64),
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: scale(24),
    paddingTop: 12,
    padding: 8,
    color: color.lightBlack,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  description: {
    fontSize: scale(16),
    paddingBottom: 16,
    color: color.darkGray,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 24,
  },
});
