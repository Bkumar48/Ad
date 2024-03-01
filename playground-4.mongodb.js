/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Adaired');

// Create a new document in the collection.
db.getCollection('casestudiescategories').insertOne({
  _id: ObjectId('65b4f00935bdba812a73121c'),
  categoryName: 'Web Development',
  slug: 'web-development',
  technologies: [],
  createdAt: ISODate('2024-01-22T11:42:41.025Z'),
  updatedAt: ISODate('2024-01-22T11:42:41.085Z'),
  __v: 0,
  childrens: []
});
