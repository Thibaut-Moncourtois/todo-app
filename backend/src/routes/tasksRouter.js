import express from "express";
const router = express.Router();

const tasksRouter = (db) => {
  // =====> ROUTE GET <=====

  router.get("/", (req, res) => {
    const sql = "SELECT * FROM tasks";
    db.all(sql, [], (err, rows) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json(rows);
    });
  });

  router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM tasks WHERE id = ?";
    db.get(sql, [req.params.id], (err, row) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json(row);
    });
  });

  // =====> ROUTE POST <=====

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

  // =====> ROUTE PUT <=====

  router.put("/:id", (req, res) => {
    const { title, description } = req.body;
    const sql = "UPDATE tasks SET title = ?, description = ? WHERE id = ?";
    db.run(sql, [title, description, req.params.id], function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ changes: this.changes });
    });
  });

  // =====> ROUTE DELETE <=====

  router.delete("/:id", (req, res) => {
    const sql = "DELETE FROM tasks WHERE id = ?";
    db.run(sql, [req.params.id], function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ deleted: this.changes });
    });
  });

  // Ajoutez d'autres routes ici

  return router;
};

export default tasksRouter;
