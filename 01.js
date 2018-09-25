var collection = require("testexport933").collection;

console.log(JSON.stringify(collection.users));

collection.add({"name": "Randall", "email": "randall@mit.edu"});

console.log("-----------------");
console.log(JSON.stringify(collection.users));