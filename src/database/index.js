const { MongoClient } = require("mongodb");
const debug = require("debug")("app:module-database");
const { Config } = require("../config/index");
var connection = null;

module.exports.Database = (collection) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!connection) {
        const client = new MongoClient(Config.mongoUri);
        connection = await client.connect();
        debug("nueva conexion realizada a Mongo Atlas");
      }

      debug("reutilizando conexion");
      const db = connection.db(Config.mongoDbname);
      resolve(db.collection(collection));
    } catch (error) {
      reject(error);
    }
  });
