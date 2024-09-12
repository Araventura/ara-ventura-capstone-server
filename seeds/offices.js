import offices from "../seed_data/offices_data.js";

export async function seed(knex) {
  await knex("DentalOffices").del();
  await knex("DentalOffices").insert(offices);
}
