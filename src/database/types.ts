export interface Card {
  id: string;
  front: string;
  back: string;
  note: number;
  lastTestedAt: string;
}

export interface Flashcard {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  cards: Card[];
}

export enum DifficultyLevel {
  Awaiting = 0,
  Easy = 1,
  Good = 2,
  Hard = 3,
}
