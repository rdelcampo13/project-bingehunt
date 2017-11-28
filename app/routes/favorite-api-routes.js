// routes/favorite-api-routes.js

var favoriteController = require('../controllers/favorite-controller.js');

module.exports = function (app) {
  
  app.get("/api/favorites", favoriteController.getAll);

  app.post("/api/favorites", favoriteController.createOne);
  
};