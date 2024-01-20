import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all tasks");
});

router.post("/", (req, res) => {
  // Implémentez votre contrôleur ici
});

// Ajoutez d'autres routes ici

export default router;
