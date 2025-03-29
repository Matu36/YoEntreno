const {
  Ejercicios,
  EjercicioGrupoMuscular,
  EjercicioFaseEntrenamiento,
  TipoGrupoMuscular,
} = require("../db.js");

const getEjercicios = async (req, res) => {
  try {
    const { tipoGrupo, grupoMuscular, faseEntrenamiento } = req.query;

    const whereConditions = {};

    if (faseEntrenamiento) {
      const fase = await EjercicioFaseEntrenamiento.findOne({
        where: { fase: faseEntrenamiento },
      });

      if (!fase) {
        return res
          .status(404)
          .json({ error: "Fase de entrenamiento no encontrada" });
      }

      whereConditions.idFaseEntrenamiento = fase.id;
    }

    const includeConditions = [
      {
        model: EjercicioGrupoMuscular,
        include: [
          {
            model: TipoGrupoMuscular,
            where: tipoGrupo ? { tipoGrupoMuscular: tipoGrupo } : {},
          },
        ],
        where: grupoMuscular ? { grupoMuscular } : {},
      },
      {
        model: EjercicioFaseEntrenamiento,
      },
    ];

    // Buscamos los ejercicios con las condiciones adecuadas
    const ejercicios = await Ejercicios.findAll({
      where: whereConditions,
      include: includeConditions,
    });

    return res.status(200).json(ejercicios);
  } catch (error) {
    console.error("Error al obtener los ejercicios:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getGrupoMuscular = async (req, res) => {
  try {
    // Usamos 'await' para esperar que se resuelva la promesa de la consulta a la base de datos
    const tipoGrupoMuscular = await TipoGrupoMuscular.findAll();

    // Verificamos si se encontraron resultados
    if (tipoGrupoMuscular.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron tipos de grupos musculares" });
    }

    return res.status(200).json(tipoGrupoMuscular);
  } catch (error) {
    console.error("Error al obtener los grupos musculares:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { getEjercicios, getGrupoMuscular };
