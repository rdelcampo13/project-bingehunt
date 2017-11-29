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

// GET a specific binge
exports.findOne = function (req, res) {
  db.binge.findOne({
    where: {
      id: req.params.id
    },
    include: [db.user]
  })
  .then(function(binge) {    
    res.json(binge);
  });
};

// POST controller for adding a new binge
exports.createOne = function (req, res) {
  req.body.userId = req.user.id;

  db.binge.create(req.body)
  .then(function(newBinge) {
    addUpvote(req.user, newBinge)
  });
  
  function addUpvote(user, binge) {
    db.upvote.create({ userId: user.id, bingeId: binge.id })
    .then(function() {
      res.json(binge);
    })
  }
};