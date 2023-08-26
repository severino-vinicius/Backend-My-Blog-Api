const { User } = require('../models');

const findAllServ = async () => {
  const userResponse = await User.findAll();
  return { status: 201, data: userResponse };
};

const findByEmailServ = async (email) => {
  const userResponse = await User.findOne({ where: { email } });
  return { status: 201, data: userResponse };
};

module.exports = {
  findAllServ,
  findByEmailServ,
};