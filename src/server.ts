import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.get("/", (req, res) => {
  return res.json({ message: "Hello, world!" });
});

app.listen(3333);
