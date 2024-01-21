import express from "express";
import sqlite3 from "sqlite3";
import tasksRouter from "./src/routes/tasksRouter.js";
const app = express();
const port = 4500;

let db = new sqlite3.Database("./tododb.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

const tasks = tasksRouter(db);

app.use("/tasks", tasks);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
