import officesJobs from "../seed_data/offices_jobs_data.js";

export async function seed(knex) {
  await knex("DentalJobs").del();
  await knex("DentalJobs").insert(officesJobs);
}
