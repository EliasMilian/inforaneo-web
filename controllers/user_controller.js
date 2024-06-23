const bcrypt = require('bcrypt');
const User = require('../models/modelo_usuario');

const userController = {};


userController.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Verificar que 'password' tenga un valor
    if (!password) {
      return res.status(400).json({ mensaje: 'La contraseña es requerida' });
    }

    // Hashear la contraseña

    // Crear un nuevo usuario
    const newUser = new User({ name, email, password, role });
    await newUser.save();

    const regex = /@uca\.edu\.sv$/;

    if (regex.test(email)) {
      // Correo válido, realiza la lógica de registro
      res.status(200).json({ mensaje: 'Registro exitoso' });
    } else {
      res.status(400).json({ mensaje: 'El correo debe terminar en @uca.edu.sv' });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};



userController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar el usuario en la base de datos
    const user = await User.findOne({ email });

    // Verificar las credenciales en texto plano
    if (!user || user.password !== password) {
      return res.status(200).json({ message: 'error' });
    }

    // Generar un token o realizar otras acciones de inicio de sesión
    // ...
    
    return res.status(200).json({ message: 'success', user });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = userController;
