module.exports = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id'
      },
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      },
      primaryKey: true
    },
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true
  })

  PostCategoryModel.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, { through: PostCategoryModel, as: 'blog_posts', foreignKey: 'category_id', otherKey: 'post_id' });
    models.BlogPost.belongsToMany(models.Category, { through: PostCategoryModel, as: 'categories', foreignKey: 'category_id', otherKey: 'post_id' });
  }
  return PostCategoryModel;
};