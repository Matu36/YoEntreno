const { MetodosEntrenamiento } = require("../db.js");

const getMétodos = async (req, res) => {
  try {
    const { idObjetivoEntrenamiento } = req.query;

    const métodos = await MetodosEntrenamiento.findAll({
      where: { idObjetivoEntrenamiento },
    });

    res.status(200).json(métodos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener los métodos de entrenamiento" });
  }
};

module.exports = {
  getMétodos,
};
