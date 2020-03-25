const users = require('../assets/db-data/usersDB');

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert(users);
    });
};
