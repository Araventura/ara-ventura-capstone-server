import express from "express";
import * as profControllers from "../controllers/professionalsControllers.js";

const profRouter = express.Router();

profRouter.route("/").get(profControllers.getProfessionals);

profRouter.route("/:id").get(profControllers.getProfessional);

export default profRouter;
