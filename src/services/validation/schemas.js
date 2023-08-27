const Joi = require('joi');

const validateNewUser = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  image: Joi.string(),
});

const validateNewCategory = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  validateNewUser,
  validateNewCategory,
};