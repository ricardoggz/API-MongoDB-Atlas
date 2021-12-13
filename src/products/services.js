//modulo de base de datos
const { ObjectId } = require("mongodb");

const { Database } = require("../database/index");

const COLLECTION = "products";

//const para traer todos los datos de la bd
const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return collection.findOne({ _id: ObjectId(id) });
};
const create = async (product) => {
  const collection = await Database(COLLECTION);
  let result = collection.insertOne(product);
  return result.insertedId;
};
module.exports.ProductsServices = {
  getAll,
  getById,
  create,
};
