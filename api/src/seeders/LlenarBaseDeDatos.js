const {
  metodosEntrenamiento,
  objetivosEntrenamiento,
  tipoGrupoMuscular,
  ejercicioFaseEntrenamiento,
  EjercicioCategoriaApi,
  ejercicios,
  dificultades,
} = require("../data/api.js");

const {
  MetodosEntrenamiento,
  ObjetivosEntrenamiento,
  Ejercicios,
  EjercicioCategoria,
  TipoGrupoMuscular,
  EjercicioFaseEntrenamiento,
  Dificultad,
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

    await Dificultad.bulkCreate(dificultades);
    console.log("Ejercicios insertados.");

    await Ejercicios.bulkCreate(ejercicios);
    console.log("Ejercicios insertados.");

    console.log("Base de datos poblada exitosamente.");
  } catch (error) {
    console.error("Error al poblar la base de datos:", error);
  }
};

const cargarSeries = async () => {
  try {
    // Filtrar ejercicios que se incluirán en el método de entrenamiento "Circuito de fuerza adaptativa"
    const seriesData = ejercicios
      .filter((ejercicio) => ejercicio.idDificultad === 1) // Solo ejercicios de dificultad "Inicial"
      .map((ejercicio, index) => ({
        idEjercicios: ejercicio.id, // ID del ejercicio existente
        idMetodoEntrenamiento: 1, // ID del método "Circuito de fuerza adaptativa"
        cantidad: index % 2 === 0 ? "3x12" : "4x10", // Alternar cantidad de repeticiones
        idDificultad: 1, // Siempre dificultad 1
        idTipoGrupoMuscular: index % 2 === 0 ? 1 : 2, // Alternar entre 1 y 2
        idCategoria: (index % 8) + 1, // Ciclar entre categorías 1-8
        idFaseEntrenamiento: (index % 3) + 1, // Ciclar entre fases 1-3
      }));

    // Insertar en la base de datos usando bulkCreate
    await Series.bulkCreate(seriesData);

    console.log("Datos insertados correctamente en la tabla Series.");
  } catch (error) {
    console.error("Error al insertar series:", error);
  }
};

module.exports = populateDatabase;
