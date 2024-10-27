/** @format */

import express from "express";
import usersRouter from "./routes/users.js";
import { db } from "./db/index.js";
import config from "./utils/config/config.js";

const server = express();

server.use(express.static("uploads"));
server.use(express.json());
server.use(usersRouter);

db();
server.listen(config.port, () => {
  console.log(`Server is running ${config.port}`);
});
