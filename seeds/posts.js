const posts = require('../assets/db-data/blogDB');

exports.seed = function(knex) {
	return knex('posts').del()
		.then(function () {
			return knex('posts').insert(posts);
		});
};
