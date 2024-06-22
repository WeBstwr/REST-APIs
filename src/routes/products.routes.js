import { Router } from "express";
import pool from "./db.config.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (result.rowCount === 0) {
      res.status(404).json({ success: false, message: "Product Not Found" });
    } else {
      res.status(200).json({ success: true, data: result.rows[0] });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const productthumbnail = req.body.productthumbnail;
    const producttitle = req.body.producttitle;
    const productdescription = req.body.productdescription;
    const productcost = req.body.productcost;
    const onoffer = req.body.onoffer;
    const id = req.body.id;
    const insert = await pool.query(
      "INSERT INTO products (productthumbnail, producttitle, productdescription, productcost, onoffer, id) VALUES($1, $2, $3, $4, $5, $6)",
      [
        productthumbnail,
        producttitle,
        productdescription,
        productcost,
        onoffer,
        id,
      ],
    );
    if (insert.rowCount === 1) {
      res
        .status(201)
        .json({ success: true, message: "Product Added Successfully" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
