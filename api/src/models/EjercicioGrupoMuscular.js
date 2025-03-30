const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "EjercicioGrupoMuscular",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idTipoGrupoMuscular: { type: DataTypes.INTEGER, allowNull: true },
      grupoMuscular: { type: DataTypes.STRING, defaultValue: null },
    },
    {
      tableName: "EjercicioGrupoMuscular",
      timestamps: false,
    }
  );
};

// GRUPO 1: core
// GRUPO 2: espalda
// GRUPO 3: pectoral
// GRUPO 4: hombros
// GRUPO 5: biceps
// GRUPO 6: triceps
// GRUPO 7: piernas
// GRUPO 8: dinamicos

//idTipoGrupoMuscular //
// 1: grandes grupos
// 2: pequeños grupos
