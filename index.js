var collection = require('./users').collection;

console.log(JSON.stringify((collection)));
console.log('-----------------------------');

var name = 'dave';
var email = 'dave@mit.edu';
collection.save(name, email);

console.log(JSON.stringify(collection));