var collection = {};
collection.users = [
    {'name': 'anne', 'email': 'ann@mit.edu'},
    {'name': 'fred', 'email': 'fred@mit.edu'}
];

collection.add = function(person){
    collection.users.push(person);
};

module.exports = {'collection': collection}