import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import FlipCard from './components/FlipCard';
import FlashCard, {FlashCardType} from './components/FlashCard';
import {
  getWindowHeight,
  getWindowWidth,
} from '../../utils/platformUtils';
import DifficultyButtons from './components/DifficultyButtons';
import Header from '../shared/Header';

const width = getWindowWidth();
const height = getWindowHeight();

const revisionItem = {
    word: 'Car',
    description: 'A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor.',
  };


const Revision = () => {
  const isFlipped = useSharedValue(false);

  const handlePress = () => {
    isFlipped.value = !isFlipped.value;
  };

  const handlePressDificultyLevel = (dificultyLevel: number) => {
    console.log('dificultyLevel', dificultyLevel);
  };

  return (
    <View style={styles.container}>
        <Header title="Revisão"/>
      <FlipCard
        isFlipped={isFlipped}
        cardStyle={styles.flipCard}
        FlippedContent={
          <FlashCard
            word={revisionItem.word}
            description={revisionItem.description}
            type={FlashCardType.RESPONSE}
            handlePress={handlePress}
          />
        }
        RegularContent={
          <FlashCard
            word={revisionItem.word}
            description={revisionItem.description}
            type={FlashCardType.QUESTION}
            handlePress={handlePress}
          />
        }
      />
      <DifficultyButtons handlePressDificultyLevel={handlePressDificultyLevel}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  flipCard: {
    width: width,
    height: height * 0.80,
  },
});

export default Revision;
