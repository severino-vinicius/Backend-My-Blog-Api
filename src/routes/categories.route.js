const route = require('express').Router();
const { categoryController } = require('../controllers');
const { checkNewCategory } = require('../middlewares/checkNewCategory.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

route.post('/', checkNewCategory, authMiddleware, categoryController.insertCategoryCont);

route.get('/', authMiddleware, categoryController.findAllCont);

module.exports = route;