const { ejercicios } = require("../data/api.js");

const { Series } = require("../db.js");

// METODO 1 //
const cargarSeries = async () => {
  try {
    const seriesData = ejercicios
      .filter(
        (ejercicio) =>
          ejercicio.idDificultad === 1 && // Solo dificultad "Inicial"
          [1, 2].includes(ejercicio.idTipoGrupoMuscular) && // Solo grupos musculares 1 y 2
          ejercicio.idCategoria >= 1 &&
          ejercicio.idCategoria <= 8 // Categorías del 1 al 8
      )
      .map((ejercicio, index) => ({
        idEjercicios: ejercicio.Id, // ID del ejercicio existente
        idMetodoEntrenamiento: 1, // Método "Circuito de fuerza adaptativa"
        cantidad: index % 2 === 0 ? "3x12" : "4x10", // Alternar cantidad de repeticiones
      }));

    await Series.bulkCreate(seriesData);

    console.log("Datos insertados correctamente en la tabla Series.");
  } catch (error) {
    console.error("Error al insertar series:", error);
  }
};

module.exports = cargarSeries;
