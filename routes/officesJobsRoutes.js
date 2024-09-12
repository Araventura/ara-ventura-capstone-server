import express from "express";
import * as offJobsControllers from "../controllers/officeJobsControllers.js";

const officeJobsRouter = express.Router();

officeJobsRouter.route("/").get(offJobsControllers.getJobs);
// .post(offJobsControllers.postJobs);

officeJobsRouter
  .route("/:id")
  .get(offJobsControllers.getJob)
  .delete(offJobsControllers.deleteJob);

export default officeJobsRouter;
