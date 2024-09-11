/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("DentalOffices", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.string("address", 255).notNullable();
    table.string("practicingDoctor", 255).notNullable();
    table.string("contactName", 255).notNullable();
    table.string("contactPosition", 100).notNullable();
    table.string("phone", 20).notNullable();
    table.string("email", 100).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("DentalOffices");
};
