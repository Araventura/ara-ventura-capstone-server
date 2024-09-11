/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("DentalProfessionals", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.decimal("payRate", 10, 2).notNullable();
    table
      .enu("title", [
        "Dental Hygienist",
        "Receptionist",
        "Chairside Assistant",
        "Office Manager",
        "Sterilization Technician",
      ])
      .notNullable();
    table
      .integer("rateReviews")
      .unsigned()
      .notNullable()
      .checkIn([1, 2, 3, 4, 5]);
    table.text("skills");
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
  return knex.schema.dropTable("DentalProfessionals");
};