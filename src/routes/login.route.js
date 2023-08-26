const route = require('express').Router();
const { loginController } = require('../controllers');
const { checkName } = require('../middlewares/checkLogin.middleware');

route.post('/', checkName, loginController.checkValidationCont);

module.exports = route;