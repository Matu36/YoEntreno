require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const Intensidad = require("./models/Intensidades");
const { DB_URL, DATABASE_URL } = process.env;

const sequelize = new Sequelize(
  DB_URL,

  {
    logging: false,
    native: false,
    dialect: "postgres",
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Usuarios,
  Suscripciones,
  Ejercicios,
  EjercicioCategoria,
  EjercicioFaseEntrenamiento,
  TipoGrupoMuscular,
  Series,
  MetodosEntrenamiento,
  ObjetivosEntrenamiento,
  Rutina,
  Repeticiones,
  Pausas,
  Dificultad,
  Intensidades,
  SeriesRepesPausas,
} = sequelize.models;

// SUSCRIPCIONES //

Usuarios.hasMany(Suscripciones, { foreignKey: "usuarioId" });
Suscripciones.belongsTo(Usuarios, { foreignKey: "usuarioId" });

// SUSCRIPCIONES //

// METODOS //
ObjetivosEntrenamiento.hasMany(MetodosEntrenamiento, {
  foreignKey: "idObjetivoEntrenamientos",
});
MetodosEntrenamiento.belongsTo(ObjetivosEntrenamiento, {
  foreignKey: "idObjetivoEntrenamientos",
});

// METODOS //

/// EJERCICIOS ///

Dificultad.hasMany(Ejercicios, { foreignKey: "idDificultad" });
Ejercicios.belongsTo(Dificultad, { foreignKey: "idDificultad" });

Ejercicios.belongsTo(EjercicioCategoria, {
  foreignKey: "idCategoria",
});
EjercicioCategoria.hasMany(Ejercicios, {
  foreignKey: "idCategoria",
});

Ejercicios.belongsTo(EjercicioFaseEntrenamiento, {
  foreignKey: "idFaseEntrenamiento",
});
EjercicioFaseEntrenamiento.hasMany(Ejercicios, {
  foreignKey: "idFaseEntrenamiento",
});

Ejercicios.belongsTo(TipoGrupoMuscular, {
  foreignKey: "idTipoGrupoMuscular",
});
TipoGrupoMuscular.hasMany(Ejercicios, {
  foreignKey: "idTipoGrupoMuscular",
});

/// EJERCICIOS ///

// INTENSIDAD //

Ejercicios.hasMany(Intensidades, { foreignKey: "IntensidadId" });
Intensidades.belongsTo(Ejercicios, { foreignKey: "IntensidadId" });

// INTENSIDAD //

// RUTINA //

Rutina.belongsTo(Usuarios, {
  foreignKey: "usuarioId",
  onDelete: "CASCADE",
});
Usuarios.hasMany(Rutina, {
  foreignKey: "usuarioId",
});

Rutina.belongsTo(MetodosEntrenamiento, {
  foreignKey: "idMetodoEntrenamiento",
});
MetodosEntrenamiento.hasMany(Rutina, {
  foreignKey: "idMetodoEntrenamiento",
});

Rutina.belongsTo(Ejercicios, {
  foreignKey: "idEjercicios",
});
Ejercicios.hasMany(Rutina, {
  foreignKey: "idEjercicios",
});

Rutina.belongsTo(SeriesRepesPausas, {
  foreignKey: "idSeriesRepesPausas",
});
SeriesRepesPausas.hasMany(Rutina, {
  foreignKey: "idSeriesRepesPausas",
});

// RUTINA //

// SERIES //

Series.belongsTo(Ejercicios, {
  foreignKey: "idEjercicios",
});
Ejercicios.hasMany(Series, {
  foreignKey: "idEjercicios",
});

Series.belongsTo(MetodosEntrenamiento, {
  foreignKey: "idMetodoEntrenamiento",
});
MetodosEntrenamiento.hasMany(Series, {
  foreignKey: "idMetodoEntrenamiento",
});

// SERIES //

// REPETICIONES //

Repeticiones.belongsTo(Series, {
  foreignKey: "idSeries",
});
Series.hasMany(Repeticiones, {
  foreignKey: "idSeries",
});

// REPETICIONES //

// PAUSAS //
Ejercicios.hasMany(Pausas, {
  foreignKey: "idEjercicios",
});
Pausas.belongsTo(Ejercicios, {
  foreignKey: "idEjercicios",
});

MetodosEntrenamiento.hasMany(Pausas, {
  foreignKey: "idMetodoEntrenamiento",
});
Pausas.belongsTo(MetodosEntrenamiento, {
  foreignKey: "idMetodoEntrenamiento",
});

// PAUSAS //

// SERIESREPESPAUSAS //

Series.hasMany(SeriesRepesPausas, {
  foreignKey: "idSeries",
});
SeriesRepesPausas.belongsTo(Series, {
  foreignKey: "idSeries",
});

Repeticiones.hasMany(SeriesRepesPausas, {
  foreignKey: "idRepeticiones",
});
SeriesRepesPausas.belongsTo(Repeticiones, {
  foreignKey: "idRepeticiones",
});

Pausas.hasMany(SeriesRepesPausas, {
  foreignKey: "idPausas",
});
SeriesRepesPausas.belongsTo(Pausas, {
  foreignKey: "idPausas",
});

// SERIESREPESPAUSAS //

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
