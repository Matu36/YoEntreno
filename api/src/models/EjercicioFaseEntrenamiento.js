const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "EjercicioFaseEntrenamiento",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fase: { type: DataTypes.STRING, defaultValue: null },
    },
    { timestamps: false }
  );
};

// fase 1: entrada en calor
// fase 2: parte central
// fase 3: vuelta a la calma
