import professionalsData from "../seed_data/professionals_data.js";

export async function seed(knex) {
  await knex("DentalProfessionals").del();
  await knex("DentalProfessionals").insert(professionalsData);
}
