require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
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
  EjercicioGrupoMuscular,
  EjercicioFaseEntrenamiento,
  TipoGrupoMuscular,
  EjerciciosMetodos,
  MetodosEntrenamiento,
  ObjetivosEntrenamiento,
  Rutina,
  MetodosEjerciciosDetalles,
} = sequelize.models;

Usuarios.hasMany(Suscripciones, { foreignKey: "usuarioId" });
Suscripciones.belongsTo(Usuarios, { foreignKey: "usuarioId" });

Ejercicios.belongsTo(EjercicioGrupoMuscular, {
  foreignKey: "idEjercicioGrupoMuscular",
});
EjercicioGrupoMuscular.hasMany(Ejercicios, {
  foreignKey: "idEjercicioGrupoMuscular",
});

// 🔗 Relación: Ejercicio pertenece a una Fase de Entrenamiento
Ejercicios.belongsTo(EjercicioFaseEntrenamiento, {
  foreignKey: "idFaseEntrenamiento",
});
EjercicioFaseEntrenamiento.hasMany(Ejercicios, {
  foreignKey: "idFaseEntrenamiento",
});

// 🔗 Relación: Grupo Muscular tiene un Tipo (grande o pequeño)
EjercicioGrupoMuscular.belongsTo(TipoGrupoMuscular, {
  foreignKey: "idTipoGrupoMuscular",
});
TipoGrupoMuscular.hasMany(EjercicioGrupoMuscular, {
  foreignKey: "idTipoGrupoMuscular",
});

Ejercicios.hasMany(EjerciciosMetodos, { foreignKey: "idEjercicio" });
EjerciciosMetodos.belongsTo(Ejercicios, { foreignKey: "idEjercicio" });

// Relación entre MetodosEntrenamiento y EjerciciosMetodos
MetodosEntrenamiento.hasMany(EjerciciosMetodos, { foreignKey: "idMetodo" });
EjerciciosMetodos.belongsTo(MetodosEntrenamiento, { foreignKey: "idMetodo" });

Rutina.belongsTo(ObjetivosEntrenamiento, {
  foreignKey: "idObjetivoEntrenamiento",
});
ObjetivosEntrenamiento.hasMany(Rutina, {
  foreignKey: "idObjetivoEntrenamiento",
});

MetodosEjerciciosDetalles.belongsTo(ObjetivosEntrenamiento, {
  foreignKey: "idObjetivoEntrenamiento",
});
ObjetivosEntrenamiento.hasMany(MetodosEjerciciosDetalles, {
  foreignKey: "idObjetivoEntrenamiento",
});

Rutina.belongsTo(MetodosEntrenamiento, { foreignKey: "idMetodoEntrenamiento" });
MetodosEntrenamiento.hasMany(Rutina, { foreignKey: "idMetodoEntrenamiento" });

Rutina.hasMany(MetodosEjerciciosDetalles, {
  foreignKey: "idMetodo",
  sourceKey: "idMetodoEntrenamiento",
});

MetodosEntrenamiento.hasMany(MetodosEjerciciosDetalles, {
  foreignKey: "idMetodo",
});
MetodosEjerciciosDetalles.belongsTo(MetodosEntrenamiento, {
  foreignKey: "idMetodo",
});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
