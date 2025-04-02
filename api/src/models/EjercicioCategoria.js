const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "EjercicioCategoria",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      grupoMuscular: { type: DataTypes.STRING, defaultValue: null },
    },
    {
      tableName: "EjercicioCategoria",
      timestamps: false,
    }
  );
};

// GRUPO 1: dinamicos
// GRUPO 2: core
// GRUPO 3: pectoral
// GRUPO 4: espalda
// GRUPO 5: piernas
// GRUPO 6: hombros
// GRUPO 7: biceps
// GRUPO 8: triceps
