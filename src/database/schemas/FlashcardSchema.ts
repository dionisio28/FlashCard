export const FlashcardSchema: Realm.ObjectSchema = {
  name: 'Flashcard',
  properties: {
    id: 'string',
    title: 'string',
    description: 'string',
    category: 'string',
    createdAt: 'string',
    updatedAt: 'string',
    cards: {type: 'list', objectType: 'Card'},
  },
  primaryKey: 'id',
};
