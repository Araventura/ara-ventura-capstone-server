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

const postJob = async (req, res) => {
  try {
    const foundOffice = await knex("DentalOffices").where({
      id: req.body.officeId,
    });
    if (foundOffice.length === 0) {
      return res
        .status(400)
        .send(`Office with id: ${req.params.officeId} does not exist`);
    }
    if (
      !req.body.officeId ||
      !req.body.jobTitle ||
      !req.body.description ||
      !req.body.dateStart ||
      !req.body.dateEnd ||
      !req.body.payMin ||
      !req.body.payMax ||
      !req.body.status
    ) {
      return res.status(400).send("Please make sure all fields are filled in");
    }

    const result = await knex("DentalJobs").insert({
      officeId: req.body.officeId,
      jobTitle: req.body.jobTitle,
      description: req.body.description,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      payMin: req.body.payMin,
      payMax: req.body.payMax,
      status: req.body.status,
    });

    const newJobId = result[0];
    const createdJob = await knex("DentalJobs").where({ id: newJobId }).first();
    res.status(201).json(createdJob);
  } catch (e) {
    res.status(500).send(`Unable to create a new inventory item: ${e}`, e);
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

export { postJob, getJobs, getJob, deleteJob };
