import initKnex from "knex";
import config from "../knexfile.js";

const knex = initKnex(config);

const getProfessionals = async (req, res) => {
  try {
    const professionalsData = await knex("DentalProfessionals");
    res.status(200).json(professionalsData);
  } catch (error) {
    res.status(400).send("Error retrieving DentalProfessionals", error);
  }
};

const getProfessional = async (rec, res) => {
  try {
    const professionalData = await knex("DentalProfessionals").where(
      "id",
      req.params.id
    );
    if (!professionalData[0]) {
      res
        .status(404)
        .send(`Professional with id: ${req.params.id} does not exist`);
    }
    res.status(200).json(professionalData[0]);
  } catch (e) {
    res
      .status(400)
      .send(
        `Error retrieving dental professional with id: ${req.params.id}`,
        e
      );
  }
};

export { getProfessionals, getProfessional };
