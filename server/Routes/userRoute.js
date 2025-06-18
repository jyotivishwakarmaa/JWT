const express = require('express');
const route = express.Router();
const userController = require('../Controllers/userController')


route.post('/registration', userController.userRegistration);
route.post('/login', userController.userLogin);
route.post('/authentication', userController.userAuthentication)

module.exports = route;