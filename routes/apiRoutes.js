<<<<<<< HEAD
var tableData = require("../models/tableData.js");


module.exports = function(app) {

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

 

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = [];

    res.json({ ok: true });
  });
};
=======
// Importing Activity table from models directory
var db = require("../models");

// Creating and exporting app to use on server.js
module.exports = function (app) {
  // Recieve the getActivities ajax call from the public/js/index.js
  app.get("api/activities/:city/:category/:price", function (req, res) {
    // Querying from Activity table from models/travel_db.js
    db.Activity.findAll({
      where: {
        // column names from Activity Table: ajax request route
        city: req.params.city,
        category: req.params.category,
        price: req.params.price
      }
        //package data in json to send to routes/htmlRoutes.js
        .then(function (dbActivities) {
          res.json(dbActivities);
        })
    })
  })
}
>>>>>>> master
