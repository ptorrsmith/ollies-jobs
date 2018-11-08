
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', (t) => {
      t.increments('id').primary()
      t.string('title')
      t.text('description')
      t.string('employer')
      t.string('claimer')
      t.string('date_info')
      t.dateTime('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs')
};
