
var path = require("path");
var db = require("../models");

module.exports = function(app) {
  // Load index page
    app.get("/", function (req, res) {
      res.render("index");
    }); 


  app.get("/res", function(req, res) {
    res.render("reservations");
  });

 
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
