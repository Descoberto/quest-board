exports.up = function(knex) {
    return knex.schema.createTable('quests', function (table) {
      table.increments();
      table.string('title').notNullable();
      table.string('course').notNullable();
      table.string('discipline').notNullable();
      table.string('classification').notNullable();
      table.string('colorClass').notNullable();
      table.string('description').notNullable();
      table.string('reward').notNullable();
      table.string('sensei_id').notNullable();
      table.foreign('sensei_id').references('id').inTable('senseis');
    });
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('quests');
  }
