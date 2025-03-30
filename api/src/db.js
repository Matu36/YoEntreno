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
  Series,
  MetodosEntrenamiento,
  ObjetivosEntrenamiento,
  Rutina,
  Repeticiones,
  Pausas,
} = sequelize.models;

Usuarios.hasMany(Suscripciones, { foreignKey: "usuarioId" });
Suscripciones.belongsTo(Usuarios, { foreignKey: "usuarioId" });

// 🔗 Relación: Ejercicio pertenece a un grupo muscular (CORE, ESPALDA, ETC)
Ejercicios.belongsTo(EjercicioGrupoMuscular, {
  foreignKey: "idEjercicioGrupoMuscular",
});
EjercicioGrupoMuscular.hasMany(Ejercicios, {
  foreignKey: "idEjercicioGrupoMuscular",
});

// 🔗 Relación: Ejercicio pertenece a una Fase de Entrenamiento (ENTRADA EN CALOR, CENTRAL, ETC)
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

// 🔗 Relación: Objetivo de entrenamiento tiene muchos Métodos de Entrenamiento
ObjetivosEntrenamiento.hasMany(MetodosEntrenamiento, {
  foreignKey: "idObjetivoEntrenamientos",
});
MetodosEntrenamiento.belongsTo(ObjetivosEntrenamiento, {
  foreignKey: "idObjetivoEntrenamientos",
});

// 🔗 Relación: Rutina pertenece a un Usuario
Rutina.belongsTo(Usuarios, {
  foreignKey: "usuarioId",
  onDelete: "CASCADE",
});
Usuarios.hasMany(Rutina, {
  foreignKey: "usuarioId",
});

// 🔗 Relación: Rutina pertenece a un Método de Entrenamiento
Rutina.belongsTo(MetodosEntrenamiento, {
  foreignKey: "idMetodoEntrenamiento",
});
MetodosEntrenamiento.hasMany(Rutina, {
  foreignKey: "idMetodoEntrenamiento",
});

// 🔗 Relación: Rutina tiene un Ejercicio
Rutina.belongsTo(Ejercicios, {
  foreignKey: "idEjercicios",
});
Ejercicios.hasMany(Rutina, {
  foreignKey: "idEjercicios",
});

// 🔗 Relación: Rutina tiene una Serie
Rutina.belongsTo(Series, {
  foreignKey: "idSeries",
});
Series.hasMany(Rutina, {
  foreignKey: "idSeries",
});

// 🔗 Relación: Rutina tiene un número de Repeticiones
Rutina.belongsTo(Repeticiones, {
  foreignKey: "idRepeticiones",
});
Repeticiones.hasMany(Rutina, {
  foreignKey: "idRepeticiones",
});

// 🔗 Relación: Rutina tiene un Tiempo de Pausa
Rutina.belongsTo(Pausas, {
  foreignKey: "idPausas",
});
Pausas.hasMany(Rutina, {
  foreignKey: "idPausas",
});

// 🔗 Relación: Serie pertenece a un Tipo de Grupo Muscular
Series.belongsTo(TipoGrupoMuscular, {
  foreignKey: "idTipoGrupoMuscular",
});
TipoGrupoMuscular.hasMany(Series, {
  foreignKey: "idTipoGrupoMuscular",
});

// 🔗 Relación: Serie pertenece a un Método de Entrenamiento
Series.belongsTo(MetodosEntrenamiento, {
  foreignKey: "idMetodoEntrenamiento",
});
MetodosEntrenamiento.hasMany(Series, {
  foreignKey: "idMetodoEntrenamiento",
});

// 🔗 Relación: Repeticiones pertenece a un Tipo de Grupo Muscular
Repeticiones.belongsTo(TipoGrupoMuscular, {
  foreignKey: "idTipoGrupoMuscular",
});
TipoGrupoMuscular.hasMany(Repeticiones, {
  foreignKey: "idTipoGrupoMuscular",
});

// 🔗 Relación: Repeticiones pertenece a un Método de Entrenamiento
Repeticiones.belongsTo(MetodosEntrenamiento, {
  foreignKey: "idMetodoEntrenamiento",
});
MetodosEntrenamiento.hasMany(Repeticiones, {
  foreignKey: "idMetodoEntrenamiento",
});

// 🔗 Relación: Pausas pertenece a un Tipo de Grupo Muscular
TipoGrupoMuscular.hasMany(Pausas, {
  foreignKey: "idTipoGrupoMuscular",
});
Pausas.belongsTo(TipoGrupoMuscular, {
  foreignKey: "idTipoGrupoMuscular",
});

// 🔗 Relación: Pausas pertenece a un Método de Entrenamiento
MetodosEntrenamiento.hasMany(Pausas, {
  foreignKey: "idMetodoEntrenamiento",
});
Pausas.belongsTo(MetodosEntrenamiento, {
  foreignKey: "idMetodoEntrenamiento",
});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
