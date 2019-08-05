const messages = require('../data/messagesDB');

exports.seed = function(knex) {
  return knex('messages').del()
    .then(function () {
      return knex('messages').insert(messages);
    });
};
