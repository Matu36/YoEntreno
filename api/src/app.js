const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");

const populateDatabase = require("../src/seeders/LlenarBaseDeDatos.js");
const cargarSeries = require("../src/seeders/CargaSeries.js");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', 'http://localhost:3000');// update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

async function iniciarCarga() {
  try {
    await populateDatabase();
    console.log("✅ Base de datos poblada correctamente.");
    await cargarSeries();
    console.log("✅ Series cargadas correctamente.");
  } catch (error) {
    console.error("❌ Error durante la carga de datos:", error);
  }
}

iniciarCarga();

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
