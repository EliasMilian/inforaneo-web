const express = require('express');
const router = express.Router();

const users_router = require('./users_router');
const est_router = require('./est_router');

router.use('/get', est_router); 
router.use('/post', est_router); 
router.use('/post', users_router); 
router.use('/get', users_router);
module.exports = router;
