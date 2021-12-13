const debug = require("debug")("app:module-products-controller");
const { ProductsServices } = require("./services");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductsServices.getAll();
      res.json(products);
    } catch (error) {
      debug("error");
      res.status(500).json({ messageError: "Internal sevrer Error" });
    }
  },
  getProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let product = await ProductsServices.getById(id);
      res.json(product);
    } catch (error) {
      debug("error");
      res.status(500).json({ messageError: "Error" });
    }
  },
  createProduct: async (req, res) => {
    try {
      const { body } = req;
      const insertedId = await ProductsServices.create(body);
      res.json(insertedId);
    } catch (error) {
      debug("error");
      res.status(500).json({ messageError: "Error" });
    }
  },
};
