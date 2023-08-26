const route = require('express').Router();
const { userController } = require('../controllers');

route.get('/', userController.findAllCont);

module.exports = route;