const {
  Rutina,
  MetodosEntrenamiento,
  ObjetivosEntrenamiento,
  Ejercicios,
  EjercicioGrupoMuscular,
  TipoGrupoMuscular,
  EjercicioFaseEntrenamiento,
  Series,
  Pausas,
  Repeticiones,
} = require("../db.js");

const getRutinaByFiltro = async (req, res) => {
  try {
    const { idMetodo } = req.query;

    if (!idMetodo) {
      return res.status(400).json({ error: "Debe proporcionar idMetodo" });
    }

    // Obtener los ejercicios SIN incluir MetodosEntrenamiento (ya que no están asociados directamente)
    const ejercicios = await Ejercicios.findAll({
      attributes: [
        "id",
        "nombre",
        "descripcion",
        "videoURL",
        "idEjercicioGrupoMuscular",
      ],
    });

    // Obtener Series, Pausas y Repeticiones filtradas por idMetodoEntrenamiento
    const series = await Series.findAll({
      where: { idMetodoEntrenamiento: idMetodo },
      attributes: ["idEjercicioGrupoMuscular", "cantidad"],
    });

    const pausas = await Pausas.findAll({
      where: { idMetodoEntrenamiento: idMetodo },
      attributes: ["idEjercicioGrupoMuscular", "cantidad"],
    });

    const repeticiones = await Repeticiones.findAll({
      where: { idMetodoEntrenamiento: idMetodo },
      attributes: ["idEjercicioGrupoMuscular", "cantidad"],
    });

    // Filtrar solo los ejercicios que tienen series, pausas o repeticiones asociadas al método
    const ejerciciosFiltrados = ejercicios.filter(
      (ejercicio) =>
        series.some(
          (s) =>
            s.idEjercicioGrupoMuscular === ejercicio.idEjercicioGrupoMuscular
        ) ||
        pausas.some(
          (p) =>
            p.idEjercicioGrupoMuscular === ejercicio.idEjercicioGrupoMuscular
        ) ||
        repeticiones.some(
          (r) =>
            r.idEjercicioGrupoMuscular === ejercicio.idEjercicioGrupoMuscular
        )
    );

    // Mapear los ejercicios y agregar series, pausas y repeticiones según el idEjercicioGrupoMuscular
    const ejerciciosConDatos = ejerciciosFiltrados.map((ejercicio) => {
      return {
        ...ejercicio.toJSON(),
        series:
          series.find(
            (s) =>
              s.idEjercicioGrupoMuscular === ejercicio.idEjercicioGrupoMuscular
          )?.cantidad || null,
        pausas:
          pausas.find(
            (p) =>
              p.idEjercicioGrupoMuscular === ejercicio.idEjercicioGrupoMuscular
          )?.cantidad || null,
        repeticiones:
          repeticiones.find(
            (r) =>
              r.idEjercicioGrupoMuscular === ejercicio.idEjercicioGrupoMuscular
          )?.cantidad || null,
      };
    });

    if (ejerciciosConDatos.length === 0) {
      return res
        .status(404)
        .json({
          error: "No se encontraron ejercicios para el método de entrenamiento",
        });
    }

    res.json(ejerciciosConDatos);
  } catch (error) {
    console.error("Error al obtener rutina:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { getRutinaByFiltro };
