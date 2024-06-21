import { Router } from "express";
import pool from "./db.config.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("getting all users");
});

export default router;
