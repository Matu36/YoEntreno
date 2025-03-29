const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ejercicios",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: { type: DataTypes.STRING, allowNull: false },
      idEjercicioGrupoMuscular: { type: DataTypes.INTEGER, allowNull: true },
      idFaseEntrenamiento: { type: DataTypes.INTEGER, allowNull: true },
      descripcion: { type: DataTypes.TEXT, defaultValue: null },
      videoURL: { type: DataTypes.TEXT, defaultValue: null },
    },
    { timestamps: false }
  );
};
