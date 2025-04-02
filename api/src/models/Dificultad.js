const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dificultad",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idEjercicios: {
        type: DataTypes.INTEGER,
        references: {
          model: "Ejercicios",
          key: "id",
        },
      },
      Dificultad: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      tableName: "Dificultad",
      timestamps: false,
    }
  );
};

/* 
1 Inicial
2 Medio
3 Avanzada
 */
