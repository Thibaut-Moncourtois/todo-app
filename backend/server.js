import express from "express";
import sqlite3 from "sqlite3";
const app = express();
const port = 4500;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let db = new sqlite3.Database("./tododb.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
