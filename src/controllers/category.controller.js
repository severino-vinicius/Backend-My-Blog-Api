const { categoryService } = require('../services');

const findAllCont = async (req, res) => {
  const { status, data } = await categoryService.findAllServ();
  res.status(status).json(data);
};

const insertCategoryCont = async (req, res) => {
  const dataUser = req.body;
  const { status, data } = await categoryService.insertCategoryServ(dataUser);
  res.status(status).json(data);
};

module.exports = {
  insertCategoryCont,
  findAllCont,
};