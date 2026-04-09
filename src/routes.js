import express from "express";
import { fetch, create, update, remove } from "./horsecontroller.js";

const router = express.Router();

router.get("/horses", fetch);
router.post("/horses", create);
router.put("/horses/:id", update);
router.delete("/horses/:id", remove);

export default router;
