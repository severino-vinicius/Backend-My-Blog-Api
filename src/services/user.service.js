const jwt = require('jsonwebtoken');
const { User } = require('../models');

const findAllServ = async () => {
  const responseUser = await User.findAll({
    attributes: { exclude: ['password'] } });
  return { status: 200, data: responseUser };
};

const findByIdServ = async (userId) => {
  const responseUser = await User.findByPk(userId, {
    attributes: { exclude: ['password'] } });
  if (!responseUser) {
    return { status: 404, data: { message: 'User does not exist' } };
  }
  return { status: 200, data: responseUser };
};

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
  findAllServ,
  findByIdServ,
  insertUserServ,
};