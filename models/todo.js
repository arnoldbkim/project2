module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("travel_db", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Todo;
  };
  