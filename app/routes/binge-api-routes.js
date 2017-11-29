// routes/binge-api-routes.js

var bingeController = require('../controllers/binge-controller.js');

module.exports = function (app) {

  app.get("/api/binges", bingeController.getAll);

  app.get("/api/binges/:id", bingeController.findOne);

  app.post("/api/binges", bingeController.createOne);

  // app.put("/api/binges/:id", bingeController.upateOne);
  //
  // app.delete("/api/binges/:id", bingeController.deleteOne);

};