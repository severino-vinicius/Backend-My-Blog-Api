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

const validateNewPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(1).required(),
}).messages({
  'string.empty': 'Some required fields are missing',
  'array.min': 'one or more "categoryIds" not found',
  'any.required': 'Some required fields are missing',

});

module.exports = {
  validateNewUser,
  validateNewCategory,
  validateNewPost,
};