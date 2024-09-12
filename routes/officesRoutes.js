import express from "express";
import * as officesController from "../controllers/officesControllers.js";

const officesRouter = express.Router();

officesRouter.route("/").get(officesController.getOffices);

officesRouter.route("/:id").get(officesController.getOffice);

// officesRouter.route("/:id/jobs").get(officesController.getJobsInOffice);

export default officesRouter;
