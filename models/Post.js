module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
    var Post = sequelize.define('posts', {
        title: DataTypes.STRING,
        body: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                Post.belongsTo(models.users, {
                    onDelete: 'CASCADE',
                    foreignKey: {
                        allowNull: false
                    }
                });
                Post.hasMany(Comment);
            }
        }
    });
=======
  var Post = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.users, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
>>>>>>> f81814a0a711b3936cfb9a21255c180a361691f9

        Post.hasMany(models.comments);
      }
    }
  });

  return Post;
};