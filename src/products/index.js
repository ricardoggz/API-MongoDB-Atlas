const express = require("express");
const router = express.Router();
const { ProductsController } = require("./controller");

//creación de rutas en la funcion que recibe como parametro nuestra app
module.exports.ProductAPI = (app) => {
  router
    .get("/", ProductsController.getProducts)
    .get("/:id", ProductsController.getProduct)
    .post("/", ProductsController.createProduct);

  app.use("/api/products", router);
};
