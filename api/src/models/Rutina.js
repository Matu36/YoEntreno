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
      cantidadDias: {
        type: DataTypes.INTEGER,
      },

      idMetodoEntrenamiento: {
        type: DataTypes.INTEGER,
        references: {
          model: "MetodosEntrenamiento",
          key: "id",
        },
      },
      idSeriesRepesPausas: {
        type: DataTypes.INTEGER,
        references: {
          model: "SeriesRepesPausas",
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

      numeroRutina: {
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
