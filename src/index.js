import express from "express";
import productsRouter from "./routes/products.routes,js";
const app = express();

app.use("/products", productsRouter);

app.listen(8080, () => {
  console.log("server running on port 8080");
});
