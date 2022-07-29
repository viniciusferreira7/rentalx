import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const CategoryRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  CategoryRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = CategoryRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
