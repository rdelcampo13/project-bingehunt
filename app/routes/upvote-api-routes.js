// routes/upvote-api-routes.js

var upvoteController = require('../controllers/upvote-controller.js');

module.exports = function (app) {
  
  app.get("/api/upvotes", upvoteController.getAll);

  app.post("/api/upvotes", upvoteController.createOne);
  
};