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
      idObjetivoEntrenamiento: {
        type: DataTypes.INTEGER,
        references: {
          model: "ObjetivosEntrenamiento",
          key: "id",
        },
      },
      nombre: {
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "MetodosEntrenamiento",
      timestamps: false,
    }
  );
};

// segun el objetivo, se despliega el metodo de entrenamiento //
