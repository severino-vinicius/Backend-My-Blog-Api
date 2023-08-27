const { Category } = require('../models');

const findAllServ = async () => {
  const responseCategory = await Category.findAll();
  return { status: 200, data: responseCategory };
};

const insertCategoryServ = async (dataUser) => {
  const { name } = dataUser;
  const newCategory = { name };
  const createdCategory = await Category.create(newCategory);

  return { status: 201, data: createdCategory };
};

module.exports = {
  findAllServ,
  insertCategoryServ,
};