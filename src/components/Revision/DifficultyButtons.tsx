/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../../utils/platformUtils';

interface DifficultyButtons {
  handlePressDificultyLevel: (difficulty: number) => void;
}

const DifficultyButtons = ({handlePressDificultyLevel}: DifficultyButtons) => {
  return (
    <View style={styles.dificultyLevelContainer}>
      <TouchableOpacity
        onPress={() => handlePressDificultyLevel(3)}
        style={[styles.button, {backgroundColor: 'red'}]}>
        <Text style={styles.titleButton}>Difícil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePressDificultyLevel(2)}
        style={[styles.button, {backgroundColor: 'green'}]}>
        <Text style={styles.titleButton}>Bom</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePressDificultyLevel(1)}
        style={[styles.button, {backgroundColor: 'blue'}]}>
        <Text style={styles.titleButton}>Fácil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dificultyLevelContainer: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    width: '100%',
    bottom: 0,
    marginBottom: scale(32),
  },
  titleButton: {
    fontSize: scale(18),
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: '25%',
    padding: scale(12),
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
});

export default DifficultyButtons;
