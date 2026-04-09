import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/horses", (req, res) => {
  res.send("Esta é a página de Cavalos.");
});

export default router;
