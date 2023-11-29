const express= require('express');
const getAllUser = require('../Controllers/userContoller');
 
const router = express.Router();

router.get('/users',getAllUser);

module.exports =  router;
