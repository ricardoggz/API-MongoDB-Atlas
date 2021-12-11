//dependencias
const express = require("express");
const debug = require("debug")("app:main");

//variables de entorno
const {Config} = require('./src/config/index');
const {ProductAPI} = require('./src/products/index');//Configuracion de nuestras rutas
const app = express();
app.use(express.json());
ProductAPI(app);

//servidor iniciado
app.listen(Config.port, () => {
  debug( `Servidor iniciado en ${Config.port}`);
});
