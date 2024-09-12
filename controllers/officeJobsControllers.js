import initKnex from "knex";
import config from "../knexfile.js";

const knex = initKnex(config);

const getJobs = async (req, res) => {
  try {
    const jobsData = await knex("DentalJobs");
    res.status(200).json(jobsData);
  } catch (error) {
    res.status(400).send(`Error retrieving jobs:`, error);
  }
};

const getJob = async (req, res) => {
  try {
    const jobData = await knex("DentalJobs").where("id", req.params.id);
    if (!jobData[0]) {
      res.status(404).send(`Job with id: ${req.params.id}, does not exist`);
    }
    res.status(200).json(jobData[0]);
  } catch (error) {
    res.status.send(`Error retrieving job with id: ${req.params.id}`, error);
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await knex("DentalJobs").where("id", req.params.id).first();
    if (!job) {
      return res.status(404).send(`Job with ID: ${req.params.id}, not found`);
    }

    await knex("DentalJobs").where("id", req.params.id).del();
    await knex("DentalOffices").where("id", req.params.id).del();

    res.status(204).send("job deleted");
  } catch (error) {
    res
      .status(500)
      .send(`Error deleting job with id: ${req.params.id}:`, error);
  }
};

export { getJobs, getJob, deleteJob };
