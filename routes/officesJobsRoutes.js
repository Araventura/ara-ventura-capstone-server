import express from "express";
import * as offJobsControllers from "../controllers/officeJobsControllers.js";

const officeJobsRouter = express.Router();

officeJobsRouter
  .route("/")
  .get(offJobsControllers.getItems)
  .post(offJobsControllers.postItem);

officeJobsRouter
  .route("/:id")
  .get(offJobsControllers.getItem)
  .delete(offJobsControllers.deleteItem);

export default officeJobsRouter;
