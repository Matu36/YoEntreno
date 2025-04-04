const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SeriesRepesPausas",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idEjercicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Ejercicios",
          key: "id",
        },
      },
      idMetodoEntrenamiento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "MetodosEntrenamiento",
          key: "id",
        },
      },

      idSeries: { type: DataTypes.INTEGER, allowNull: true },
      idRepeticiones: { type: DataTypes.INTEGER, allowNull: true },
      idPausas: { type: DataTypes.INTEGER, allowNull: true },
    },
    { timestamps: false }
  );
};
