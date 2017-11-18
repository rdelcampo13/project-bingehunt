// routes/user-api-routes.js

var bingeController = require('../controllers/binge-controller.js');

mondule.exports = function (app) {
  app.get("/api/binges", bingeController.getAll)

};