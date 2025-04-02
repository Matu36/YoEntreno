const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Intensidades",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idEjercicios: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Ejercicios",
          key: "id",
        },
      },
      tipo: { type: DataTypes.STRING, defaultValue: null },
      Intensidad: { type: DataTypes.STRING, defaultValue: null },
    },
    {
      tableName: "Intensidades",
      timestamps: false,
    }
  );
};

/* 
1 baja      50 %
2 media     70 %
3 alta      80 a 100 %
*/
