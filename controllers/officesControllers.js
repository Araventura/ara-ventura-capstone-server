import initKnex from "knex";
import config from "../knexfile.js";

const knex = initKnex(config);

const getOffices = async (req, res) => {
  try {
    const officesData = await knex("DentalOffices");
    res.status(200).json(officesData);
  } catch (error) {
    res.status(400).send("Error retrieving offices:", error);
  }
};

const getOffice = async (req, res) => {
  try {
    const officeData = await knex("DentalOffices").where("id", req.params.id);
    if (!officeData[0]) {
      res.status(404).send(`Office with ID: ${req.params.id} does not exist`);
    }
    res.status(200).json(officeData[0]);
  } catch (error) {
    res
      .status(400)
      .send(`Error retrieving office with id ${req.params.id}`, error);
  }
};

export { getOffice, getOffices };
