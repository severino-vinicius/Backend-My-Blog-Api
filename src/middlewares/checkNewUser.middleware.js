const { validateNewUser } = require('../services/validation/schemas');

const checkNewUser = (req, res, next) => {
  const dataNewUser = req.body;

  const { error } = validateNewUser.validate(dataNewUser);

  if (error) {
    return res.status(400).json({
      message: error.message,
  });
  }
  next();
};

module.exports = {
  checkNewUser,
};