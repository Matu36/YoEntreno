const {
  Rutina,
  MetodosEjerciciosDetalles,
  EjerciciosMetodos,
  MetodosEntrenamiento,
  ObjetivosEntrenamiento,
  Ejercicios,
} = require("../db.js");

const getRutinaByFiltro = async (req, res) => {
  try {
    const { idObjetivo, idMetodo } = req.query;

    if (!idObjetivo || !idMetodo) {
      return res
        .status(400)
        .json({ error: "Debe proporcionar idObjetivo y idMetodo" });
    }

    // Buscar la rutina con los filtros
    const rutina = await Rutina.findOne({
      where: {
        idObjetivoEntrenamiento: idObjetivo,
        idMetodoEntrenamiento: idMetodo,
      },
      include: [
        {
          model: ObjetivosEntrenamiento,
          attributes: ["id", "objetivo"],
        },
        {
          model: MetodosEntrenamiento,
          attributes: ["id", "metodo", "descripcion", "tipo"],
          include: [
            {
              model: EjerciciosMetodos,
              required: false, // No bloquear si no hay datos
              where: { idMetodo: idMetodo },
              include: [
                {
                  model: Ejercicios,
                  attributes: ["id", "nombre"],
                },
              ],
              attributes: ["series", "repeticiones", "descanso"],
            },
          ],
        },
        {
          model: MetodosEjerciciosDetalles,
          required: false, // No bloquear si no hay datos
          where: { idMetodo: idMetodo, idObjetivo: idObjetivo },
          attributes: ["series", "repeticiones"],
        },
      ],
    });

    if (!rutina) {
      return res
        .status(404)
        .json({ error: "No se encontró una rutina con estos parámetros" });
    }

    res.json(rutina);
  } catch (error) {
    console.error("Error al obtener rutina:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { getRutinaByFiltro };
