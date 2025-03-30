const { ObjetivosEntrenamiento } = require("../db.js");

const getObjetivos = async (req, res) => {
  try {
    const objetivos = await ObjetivosEntrenamiento.findAll();

    if (objetivos.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron objetivos de entrenamiento" });
    }

    return res.status(200).json(objetivos);
  } catch (error) {
    console.error("Error al obtener los objetivos:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getObjetivos,
};
