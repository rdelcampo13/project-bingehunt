// controllers/binge-controller

var db = require('../models');
var exports = module.exports = {};

// GET list of all binges
exports.getAll = function (req, res) {
  db.binge.findAll({
    include: [db.user]
  })
  .then(function(binges) {
    res.json(binges);
  });
};

// POST controller for adding a new binge
exports.createOne = function (req, res) {
  req.body.userId = req.user.id;

  db.binge.create(req.body)
  .then(function(newBinge) {
    res.json(newBinge);
  });
};