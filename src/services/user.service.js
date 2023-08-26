const jwt = require('jsonwebtoken');
const { User } = require('../models');

const insertUserServ = async (dataUser) => {
  const { displayName, email, password, image } = dataUser;
  const checkEmailInUse = await User.findOne({ where: { email } });
  if (checkEmailInUse) {
    return { status: 409, data: { message: 'User already registered' } };
  }
  const newUser = { displayName, email, password, image };
  const createdUser = await User.create(newUser);
  const token = jwt.sign({
    id: createdUser.id,
    name: createdUser.displayName,
    email: createdUser.email,
  }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return { status: 201, data: { token } };
};

module.exports = {
  insertUserServ,
};