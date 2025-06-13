//importaciones  necesarias
const express = require("express");
const app = express();
const sequelize = require("./config/dataBase");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();


app.use(express.json());
//definimos el prefijo para todas las rutas
app.use("/api/users", userRoutes);

//conexion con la base de datos
const PORT = process.env.PORT || 3000;

//sincroniza los modelos con la BD y crea las tablas si no estan creadas
sequelize.sync()
    .then(() => {
        console.log("Base de datos encontrada");
        //iniciamos el servidor y lo ponemos a escuhcar el puerto
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
            
        });
        
    })
    .catch(err => {
        console.error("No se pudo conectar a la base de datos: ", err)
    });

