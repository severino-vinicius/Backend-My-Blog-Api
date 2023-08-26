const route = require('express').Router();
const { userController } = require('../controllers');
const { checkNewUser } = require('../middlewares/checkNewUser.middleware');

route.post('/', checkNewUser, userController.insertUserCont);

module.exports = route;