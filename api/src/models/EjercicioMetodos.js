const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "EjercicioMetodos",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ejercicioId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Ejercicios",
          key: "id",
        },
        onDelete: "CASCADE",
      },

      series: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      repeticiones: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      intensidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pausa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
