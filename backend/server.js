import express from "express";
import sqlite3 from "sqlite3";
import tasks from "./src/routes/tasks";
const app = express();
const port = 5173;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/tasks", tasks);

let db = new sqlite3.Database("./tododb.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
