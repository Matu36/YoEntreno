const {
  metodosEntrenamiento,
  objetivosEntrenamiento,
  tipoGrupoMuscular,
  ejercicioFaseEntrenamiento,
  EjercicioCategoriaApi,
  ejercicios,
} = require("../data/api.js");

const {
  MetodosEntrenamiento,
  ObjetivosEntrenamiento,
  Ejercicios,
  EjercicioCategoria,
  TipoGrupoMuscular,
  EjercicioFaseEntrenamiento,
} = require("../db.js");

const populateDatabase = async () => {
  try {
    console.log("Iniciando llenado de la base de datos...");

    await ObjetivosEntrenamiento.bulkCreate(objetivosEntrenamiento);
    console.log("Objetivos de Entrenamiento insertados.");

    await MetodosEntrenamiento.bulkCreate(metodosEntrenamiento);
    console.log("Métodos de Entrenamiento insertados.");

    await TipoGrupoMuscular.bulkCreate(tipoGrupoMuscular);
    console.log("Tipos de Grupo Muscular insertados.");

    await EjercicioCategoria.bulkCreate(EjercicioCategoriaApi);
    console.log("Categorías de Ejercicio insertadas.");

    await EjercicioFaseEntrenamiento.bulkCreate(ejercicioFaseEntrenamiento);
    console.log("Fases de Entrenamiento insertadas.");

    await Ejercicios.bulkCreate(ejercicios);
    console.log("Ejercicios insertados.");

    console.log("Base de datos poblada exitosamente.");
  } catch (error) {
    console.error("Error al poblar la base de datos:", error);
  }
};

module.exports = populateDatabase;
