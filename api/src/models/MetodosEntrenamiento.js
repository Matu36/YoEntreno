const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "MetodosEntrenamiento",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      metodo: {
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      tipo: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
