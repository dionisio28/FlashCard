import realm from '../realmConfig';
import {Flashcard, Card, DifficultyLevel} from '../types';

export const addCardToFlashcard = (
  flashcardId: string,
  cardId: string,
  front: string,
  back: string,
) => {
  const now = new Date().toISOString();

  realm.write(() => {
    const flashcard = realm.objectForPrimaryKey<Flashcard>(
      'Flashcard',
      flashcardId,
    );
    if (flashcard) {
      flashcard.cards.push({
        id: cardId,
        front,
        back,
        note: DifficultyLevel.Awaiting,
        lastTestedAt: '',
      } as Card);
      flashcard.updatedAt = now;
    }
  });
};

export const deleteCardFromFlashcard = (
  flashcardId: string,
  cardId: string,
): void => {
  realm.write(() => {
    const flashcard = realm.objectForPrimaryKey<Flashcard>(
      'Flashcard',
      flashcardId,
    );
    if (flashcard) {
      const cardToDelete = flashcard.cards.find(card => card.id === cardId);
      if (cardToDelete) {
        flashcard.cards.splice(flashcard.cards.indexOf(cardToDelete), 1);
        flashcard.updatedAt = new Date().toISOString();
      }
    }
  });
};

export const updateCardLastTested = (cardId: string, date: string, note: DifficultyLevel): void => {
  realm.write(() => {
    const card = realm.objectForPrimaryKey<Card>('Card', cardId);
    if (card) {
      card.lastTestedAt = date;
      card.note = note;
    }
  });
};
