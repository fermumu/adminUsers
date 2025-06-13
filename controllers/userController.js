//importamos el usermodel para realizar la interaccion con la base de datos
const User = require("../models/userModel");

//funcion para llamar a todos los usuarios registrados
exports.getAllUsers = async(req, res) =>{
    const users = await User.findAll();
    res.json(users);
};

//funcion para crear un nuevo usuario
exports.createUser = async(req, res) => {
    //extraccion de los datos enviados en el cuerpo de la solicitud
    const { name, email } = req.body;
    try{
        //creamos un nuevo registro en la tabla Users con los datos obtenidos
        const newUser = await User.create({ name, email });
        //respondemos al usuario que la solicitud fue creada
        res.status(201).json(newUser);
    }catch (err){
        //capturamos e informamos el error
        res.status(400).json({ message: err.message});
    }
};

//funcion para hacer el llamado de un usuario por ID
exports.getUserById = async (req, res) => {
    // buscamos el usuario por el ID  de la url
    const user = await User.findByPk(req.params.id);
    // si el usuario existe lo devolvemos con  JSON
    if(user) return res.json(user);
    // si no exixste damos espuesta 
    res.status(404).json({ message: "Usuario no encontraso"});
};

// funcion para actualizar usuario por ID
exports.updateUser = async (req, res) => {
    //obtenemos los datos del cuerpo de la solicitud
    const { name, email } = req.body;
    //buscamos el usuario por ID 
    const user = await User.findByPk(req.params.id);
    if(user){
        await user.update({ name, email });
        return res.json(user);
    }

    res.status(404).json({ message: "Usuario no encontrado"});
};

//funcion para eliminar usuario por ID
exports.deleteUser = async (req, res) => {
    //buscamos el usuario por el ID enviado en la URL
    const user = await User.findByPk(req.params.id);
    //si el usuario existe lo elimina y retorna mensaje
    if(user){
        await user.destroy();
        return res.json({ message:"Usuario eliminado" });
    }
    // si el usuario no existe envia mensaje
    res.status(404).json({ message: "Usuario no encontrado" });
};

