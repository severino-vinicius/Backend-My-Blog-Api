const { validateNewCategory } = require('../services/validation/schemas');

const checkNewCategory = (req, res, next) => {
  const dataNewCategory = req.body;

  const { error } = validateNewCategory.validate(dataNewCategory);

  if (error) {
    return res.status(400).json({
      message: error.message,
  });
  }
  next();
};

module.exports = {
  checkNewCategory,
};