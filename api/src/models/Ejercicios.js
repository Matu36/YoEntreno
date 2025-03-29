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
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      videoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      grupoMuscular: {
        type: DataTypes.ENUM(
          "Pectorales",
          "Espalda",
          "Piernas",
          "Bíceps",
          "Tríceps",
          "Hombros",
          "Abdomen"
        ),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
