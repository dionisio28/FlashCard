import generateId from '../../utils/generateId';
import realm from '../realmConfig';
import {Flashcard} from '../types';

export const addFlashcard = (title: string, description: string): void => {
  const now = new Date().toISOString();
  const id = generateId();

  realm.write(() => {
    realm.create('Flashcard', {
      id,
      title,
      description,
      category: '',
      createdAt: now,
      updatedAt: now,
      cards: [],
    });
  });
};

export const getAllFlashcards = (): Flashcard[] => {
  const results = realm.objects<Flashcard>('Flashcard');
  return results.map(flashcard => ({
    id: flashcard.id,
    title: flashcard.title,
    description: flashcard.description,
    category: flashcard.category,
    createdAt: flashcard.createdAt,
    updatedAt: flashcard.updatedAt,
    cards: flashcard.cards.map(card => ({
      id: card.id,
      front: card.front,
      back: card.back,
      note: card.note,
      lastTestedAt: card.lastTestedAt,
    })),
  }));
};

export const getFlashcardById = (flashcardId: string): Flashcard | null => {
  const flashcard = realm.objectForPrimaryKey<Flashcard>(
    'Flashcard',
    flashcardId,
  );

  if (!flashcard) {
    return null;
  }

  return {
    id: flashcard.id,
    title: flashcard.title,
    description: flashcard.description,
    category: flashcard.category,
    createdAt: flashcard.createdAt,
    updatedAt: flashcard.updatedAt,
    cards: flashcard.cards.map(card => ({
      id: card.id,
      front: card.front,
      back: card.back,
      note: card.note,
      lastTestedAt: card.lastTestedAt,
    })),
  };
};

export const deleteFlashcard = (flashcardId: string): void => {
  realm.write(() => {
    const flashcard = realm.objectForPrimaryKey<Flashcard>(
      'Flashcard',
      flashcardId,
    );
    if (flashcard) {
      realm.delete(flashcard);
    }
  });
};
