const { BlogPost, PostCategory, Category } = require('../models');

const insertPostServ = async (dataPost, userId) => {
  const { title, content, categoryIds } = dataPost;

  const myCategories = await Category.findAll();

  const validateCategories = categoryIds.every((Categoryid) => myCategories
    .some((category) => category.dataValues.id === Categoryid));

  if (!validateCategories) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }

  const newPost = { title, content, userId };
  const createdPost = await BlogPost.create(newPost);

  const postCategory = categoryIds.map((id) => ({ postId: createdPost.id, categoryId: id }));

  await PostCategory.bulkCreate(postCategory);
  // const findById = await BlogPost.findByPk(createdPost.id);

  return { status: 201, data: createdPost };
};

module.exports = {
  insertPostServ,
};