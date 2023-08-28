const route = require('express').Router();
const { postController } = require('../controllers');
const { checkNewPost } = require('../middlewares/checkNewPost.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

route.post('/', checkNewPost, authMiddleware, postController.insertPostCont);

module.exports = route;