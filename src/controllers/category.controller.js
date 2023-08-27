const { categoryService } = require('../services');

const insertCategoryCont = async (req, res) => {
  const dataUser = req.body;
  const { status, data } = await categoryService.insertCategoryServ(dataUser);
  res.status(status).json(data);
};

module.exports = {
  insertCategoryCont,
};