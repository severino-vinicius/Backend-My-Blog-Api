const { userService } = require('../services');

const findAllCont = async (req, res) => {
  const { status, data } = await userService.findAllServ();
  res.status(status).json(data);
};

module.exports = {
  findAllCont,
};