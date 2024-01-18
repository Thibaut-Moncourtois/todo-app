import sequelize from "./sequelize";
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

sequelize.sync().then(() => console.log("Database & tables created!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
