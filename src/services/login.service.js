const jwt = require('jsonwebtoken');
const { User } = require('../models');

const findByEmailServ = async (email) => {
  const userResponse = await User.findOne({ where: { email } });
  return userResponse;
};

const checkValidationServ = async (email, password) => {
  const userResponse = await findByEmailServ(email);
  if (!userResponse) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }
  if (password !== userResponse.password) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }
  const token = jwt.sign({
    id: userResponse.id,
    name: userResponse.displayName,
    email: userResponse.email,
  }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return { status: 200, data: { token } };
};

module.exports = {
  checkValidationServ,
};