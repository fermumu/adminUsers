//Importacion requerida
const { Sequelize } = require("sequelize"); 

//Cargamos las variables de entorno
require("dotenv").config();

//Creamos una instancia de sequelize en donde usamos el archivo .env
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        //el tipo de Bd que vamos a implementar
        dialect:"mysql",
        port: process.env.DB_PORT
    }
);

//Exportamos la instancia para usarla en otros archivos
module.exports = sequelize;

