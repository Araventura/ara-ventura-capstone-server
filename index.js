import express from "express";
import "dotenv/config";
import initKnex from "knex";
import cors from "cors";
import config from "./knexfile.js";

import officeJobsRouter from "./routes/officesJobsRoutes.js";
import officesRouter from "./routes/officesRoutes.js";
import professionalRouter from "./routes/professionalsRoutes.js";

const knex = initKnex(config);

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json()); //initializing json middleware

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use("/offices", officesRouter);
app.use("/professionals", professionalRouter);
app.use("/jobs", officeJobsRouter);

app.listen(PORT, () => {
  console.log("App running on port:" + PORT);
});
