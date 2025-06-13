//importaciones requeridas
const { DataTypes } = require("sequelize");
const sequelize = require("../config/dataBase.js");

// definimos el modelo que necesitamos en 
// este caso User con sus campos y validaciones, esta entidad se generara automaticamente.
const User = sequelize.define("User",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

//exportamos el modelo para que pueda ser usado en otros archivos
module.exports = User;