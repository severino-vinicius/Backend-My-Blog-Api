const { validateNewPost } = require('../services/validation/schemas');

const checkNewPost = (req, res, next) => {
  const dataNewPost = req.body;

  const { error } = validateNewPost.validate(dataNewPost);

  if (error) {
    return res.status(400).json({
      message: error.message,
  });
  }
  next();
};

module.exports = {
  checkNewPost,
};