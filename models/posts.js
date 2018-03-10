'use strict';
module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define('Posts', {
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
  };
  return Posts;
};