/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.increments('id').primary(); // Defines id column as SERIAL (auto-increment)
        table.string('name');
        table.string('category');
        table.decimal('price');
        table.json('images');
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');  
};
