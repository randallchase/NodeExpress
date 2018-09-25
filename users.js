var collection = {};
collection.users = [
    {'name': 'pete', 'email': 'pete@mit.edu'},
    {'name': 'paul', 'email': 'paul@mit.edu'},
    {'name': 'mike', 'email': 'mike@mit.edu'},
    {'name': 'jane', 'email': 'jane@mit.edu'},
    {'name': 'mary', 'email': 'mary@mit.edu'},
    {'name': 'tina', 'email': 'tina@mit.edu'}
];

collection.save = function save(name, email) {
    collection.users.push(
        {'name': name, 'email': email}
    );
};

module.exports = {'collection': collection};