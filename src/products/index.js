const express = require("express");
const router = express.Router();
const { ProductsControler } = require("./controller");

//creación de rutas en la funcion que recibe como parametro nuestra app
module.exports.ProductAPI = (app) => {
  router
    .get("/", ProductsControler.getProducts)
    .get("id:", ProductsControler.getProduct)
    .post("/", ProductsControler.createProduct);

  app.use("api/products", router);
};
