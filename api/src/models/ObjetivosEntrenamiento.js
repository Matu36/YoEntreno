const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ObjetivosEntrenamiento",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      objetivo: { type: DataTypes.STRING },
    },
    {
      tableName: "ObjetivosEntrenamiento",
      timestamps: false,
    }
  );
};

// 1  Adaptacipón
// 2  Resistencia muscular
// 3  Fuerza máxima
// 4  Estabilidad, equilibro y Postura
// 5  Prevención de lesiones
// 6  Hipertrofia Muscular
// 7  Potencia Muscular
