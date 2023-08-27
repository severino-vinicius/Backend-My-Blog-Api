const { Category } = require('../models');

const insertCategoryServ = async (dataUser) => {
  const { name } = dataUser;
  const newCategory = { name };
  const createdCategory = await Category.create(newCategory);

  return { status: 201, data: createdCategory };
};

module.exports = {
  insertCategoryServ,
};