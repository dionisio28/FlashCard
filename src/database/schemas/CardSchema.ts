export const CardSchema: Realm.ObjectSchema = {
  name: 'Card',
  properties: {
    id: 'string',
    front: 'string',
    back: 'string',
    note: 'string',
    lastTestedAt: 'string',
  },
  primaryKey: 'id',
};
