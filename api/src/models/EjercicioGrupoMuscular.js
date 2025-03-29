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
    },
    { timestamps: false }
  );
};
