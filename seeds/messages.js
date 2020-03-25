const messages = require('../assets/db-data/messagesDB');

exports.seed = function(knex) {
  return knex('messages').del()
    .then(function () {
      return knex('messages').insert(messages);
    });
};
