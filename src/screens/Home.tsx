import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import Header from '../components/shared/Header';
import {getWindowWidth} from '../utils/platformUtils';
import CardItem from '../components/Home/CardItem';
import {homeStrings} from '../locales';
import {color} from '../styles';
import Button from '../components/shared/Button';
import CreateFlashcardModal from '../components/Home/CreateFlashcardModal';
import {Flashcard} from '../database/types';
import {
  addFlashcard,
  getAllFlashcards,
} from '../database/services/flashcardService';
import EmptyFlashcardMessage from '../components/Home/EmptyFlashcardMessage';

const width = getWindowWidth();

const Home: React.FC = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [flashCards, setFlashCards] = useState<Flashcard[]>([]);

  console.log('flashCards', flashCards);

  const fetchFlashcards = useCallback(() => {
    const fetchedFlashcards = getAllFlashcards();
    setFlashCards(fetchedFlashcards);
  }, []);

  useEffect(() => {
    fetchFlashcards();
  }, [fetchFlashcards]);

  const handleCreateFlashcard = useCallback(
    (title: string, description: string) => {
      addFlashcard(title, description);
      fetchFlashcards();
      setModalVisibility(false);
    },
    [fetchFlashcards],
  );

  const renderItem = useCallback(({item}: {item: Flashcard}) => {
    return <CardItem cardData={item} />;
  }, []);

  const keyExtractor = useCallback((item: Flashcard) => String(item.id), []);

  return (
    <View style={styles.container}>
      <Header title={homeStrings.flashcard} />
      {flashCards.length ? (
        <>
          <FlatList
            data={flashCards}
            style={styles.flatlist}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            removeClippedSubviews
            updateCellsBatchingPeriod={50}
          />
          <Button onPress={() => setModalVisibility(true)} />
        </>
      ) : (
        <EmptyFlashcardMessage onPress={() => setModalVisibility(true)} />
      )}

      <CreateFlashcardModal
        visible={modalVisibility}
        onClose={() => setModalVisibility(false)}
        onCreate={handleCreateFlashcard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: color.background,
  },
  flatlist: {
    padding: 16,
  },
});

export default React.memo(Home);
