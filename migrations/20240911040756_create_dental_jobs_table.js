/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("DentalJobs", (table) => {
    table.increments("id").primary();
    table.integer("officeId").unsigned().notNullable();
    table
      .foreign("officeId")
      .references("id")
      .inTable("DentalOffices")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("jobTitle", 255).notNullable();
    table.text("description");
    table.date("dateStart").notNullable();
    table.date("dateEnd").notNullable();
    table.decimal("payMin", 10, 2).notNullable();
    table.decimal("payMax", 10, 2).notNullable();
    table.enu("status", ["Open", "Closed"]).defaultTo("Open");
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
  return knex.schema.dropTable("DentalJobs");
};
