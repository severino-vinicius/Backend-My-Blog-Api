const route = require('express').Router();
const { userController } = require('../controllers');
const { checkNewUser } = require('../middlewares/checkNewUser.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

route.post('/', checkNewUser, userController.insertUserCont);

route.get('/', authMiddleware, userController.findAllCont);

module.exports = route;