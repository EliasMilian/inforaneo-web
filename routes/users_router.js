const express = require('express');
const router = express.Router();

// Aquí puedes definir tus rutas usando router.get(), router.post(), etc.

const {
  
  register,login
}= require('../controllers/user_controller');
const { model } = require('mongoose');


router.post('/register', register);
router.post('/login', login);



module.exports = router;
