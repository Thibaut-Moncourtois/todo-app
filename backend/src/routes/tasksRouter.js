import express from "express";
const router = express.Router();

const tasksRouter = (db) => {
  router.get("/", (req, res) => {
    res.send("Get all tasks");
  });

  router.post("/", (req, res) => {
    const { title, description } = req.body;
    const sql = `INSERT INTO tasks (title, description) VALUES (?, ?)`;
    db.run(sql, [title, description], function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    });
  });

  // Ajoutez d'autres routes ici

  return router;
};

export default tasksRouter;
