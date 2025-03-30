const {
  Ejercicios,
  EjercicioGrupoMuscular,
  EjercicioFaseEntrenamiento,
  TipoGrupoMuscular,
} = require("../db.js");

const createEjercicio = async (req, res) => {
  try {
    const {
      nombre,
      idEjercicioGrupoMuscular,
      idFaseEntrenamiento,
      descripcion,
      videoURL,
    } = req.body;

    if (!nombre || !idEjercicioGrupoMuscular || !idFaseEntrenamiento) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const newEjercicio = await Ejercicios.create({
      nombre,
      idEjercicioGrupoMuscular,
      idFaseEntrenamiento,
      descripcion,
      videoURL,
    });

    return res.status(201).json({
      message: "Ejercicio creado exitosamente",
      ejercicio: newEjercicio,
    });
  } catch (error) {
    console.error("Error al crear el ejercicio:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

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
    const tipoGrupoMuscular = await TipoGrupoMuscular.findAll();

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

const getFaseEntrenamiento = async (req, res) => {
  try {
    const faseEntrenamiento = await EjercicioFaseEntrenamiento.findAll();

    if (faseEntrenamiento.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron tipos de grupos musculares" });
    }

    return res.status(200).json(faseEntrenamiento);
  } catch (error) {
    console.error("Error al obtener la fase de entrenamiento:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getEjercicioGrupoMuscular = async (req, res) => {
  try {
    const ejercicioGrupoMuscular = await EjercicioGrupoMuscular.findAll();

    if (ejercicioGrupoMuscular.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron tipos de grupos musculares" });
    }

    return res.status(200).json(ejercicioGrupoMuscular);
  } catch (error) {
    console.error("Error al obtener el ejercicio grupo muscular:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getEjercicios,
  getGrupoMuscular,
  getFaseEntrenamiento,
  getEjercicioGrupoMuscular,
  createEjercicio,
};
