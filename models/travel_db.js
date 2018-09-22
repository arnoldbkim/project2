// Creating table structure  to use in ./routes/apiRoutes.js and htmlRoutes.js
module.exports = function (sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
      reserved: DataTypes.BOOLEAN,
      time: DataTypes.DATE,
      name: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      activity_id: DataTypes.INTEGER
    });
    return Reservation;
   
    var Activity = sequelize.define("Activity", {
      // Restaurant or hotel
      category: DataTypes.STRING,
      // Name of restaurant or hotel
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      city_id: INTEGER
    });
    return Activity;
   
    var City = sequelize.define("City", {
      city: DataTypes.STRING
    })
    return City;
   
    // City id is a foreign key for the Category table as city_id
    Activity.belongsTo(City);
   
    // Category id is a foreign key for the Reservation table as category_id
    Reservation.belongsTo(Activity);
   };
  