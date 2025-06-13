//Importamos express pra realizar los enrutamientos
const express = require("express");
//instacia del enrutador
const router = express.Router();
//importamos las funciones del controlador
const userController = require("../controllers/userController");


//ruta para obtener todos los usuarios
router.get("/", userController.getAllUsers);
//ruta pra obtener usuarios por ID
router.get("/:id", userController.getUserById);
//ruta para crear unusario
router.post("/", userController.createUser);
//ruta para actualizar usuario por ID
router.put("/:id", userController.updateUser);
//ruta para eliminar usuario por id
router.delete("/:id", userController.deleteUser);


//exportamos para usar el router en la app principal
module.exports = router;