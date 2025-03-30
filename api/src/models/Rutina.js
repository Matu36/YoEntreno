const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Rutina",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Usuarios",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      idMetodoEntrenamiento: {
        type: DataTypes.INTEGER,
        references: {
          model: "MetodosEntrenamiento",
          key: "id",
        },
      },
      idEjercicios: {
        type: DataTypes.INTEGER,
        references: {
          model: "Ejercicios",
          key: "id",
        },
      },
      idSeries: {
        type: DataTypes.INTEGER,
        references: {
          model: "Series",
          key: "id",
        },
      },
      idRepeticiones: {
        type: DataTypes.INTEGER,
        references: {
          model: "Repeticiones",
          key: "id",
        },
      },
      idPausas: {
        type: DataTypes.INTEGER,
        references: {
          model: "Pausas",
          key: "id",
        },
      },
      cantidadDias: {
        type: DataTypes.INTEGER,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
};
