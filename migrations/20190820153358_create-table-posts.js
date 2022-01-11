
exports.up = function(knex) {
	return knex.schema.createTable('posts', (table) => {
		table.increments();
		table.text('created_on');
		table.integer('status');
		table.text('url');
		table.text('pagetitle');
		table.text('title');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('posts');
};
