/* eslint-disable no-sparse-arrays */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tts from 'react-native-tts';
import {scale} from '../../utils/platformUtils';
import {color} from '../../styles';

const speak = (text: string) => {
  Tts.speak(text);
};

export enum FlashCardType {
  QUESTION,
  RESPONSE,
}

interface FlashCardProps {
  word: string;
  description: string;
  handlePress: () => void;
  type: FlashCardType;
}

const FlashCard = ({word, description, handlePress, type}: FlashCardProps) => {
  return (
    <View
      style={[
        styles.container,

        {
          backgroundColor:
            type === FlashCardType.QUESTION
              ? color.primaryBlue
              : color.backgroundGreen,
        },
      ]}>
      {type === FlashCardType.QUESTION ? (
        <Text style={styles.word}>{word}</Text>
      ) : (
        <Text style={styles.description}>{description}</Text>
      )}

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Icon name="edit" color={'#FFF'} size={scale(30)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.button, , styles.middleButton]}>
          <Icon name="flip" color={'#FFF'} size={scale(38)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            speak(type === FlashCardType.QUESTION ? word : description)
          }
          style={styles.button}>
          <Icon name="volume-up" color={'#FFF'} size={scale(30)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2088e6',
    flex: 1,
    padding: scale(16),
    margin: scale(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  middleButton: {
    backgroundColor: '#ff5251',
    padding: scale(8),
    borderRadius: 50,
    bottom: scale(8),
  },
  button: {
    margin: scale(8),
    padding: scale(8),
  },
  word: {
    fontSize: scale(38),
    color: 'white',
    fontWeight: 500,
    alignSelf: 'center',
    textAlign: 'center',
  },
  description: {
    fontSize: scale(26),
    color: 'white',
    fontWeight: 500,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default FlashCard;
