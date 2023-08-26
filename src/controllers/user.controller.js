const { userService } = require('../services');

// const findAllCont = async (req, res) => {
//   const { status, data } = await userService.findAllServ();
//   res.status(status).json(data);
// };

const insertUserCont = async (req, res) => {
  const dataUser = req.body;
  const { status, data } = await userService.insertUserServ(dataUser);
  res.status(status).json(data);
};

module.exports = {
  // findAllCont,
  insertUserCont,
};