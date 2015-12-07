'use strict';
module.exports = function(sequelize, DataTypes) {
  var links = sequelize.define('links', {
    id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return links;
};