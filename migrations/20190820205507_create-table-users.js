
exports.up = function(knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments();
		table.text('email');
		table.text('password');
		table.text('role');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('users');
};
