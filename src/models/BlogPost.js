module.exports = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      primaryKey: true
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true
  })

  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, { foreignKey: 'userId', as: 'user' }) 
  }
  return BlogPostModel;
};