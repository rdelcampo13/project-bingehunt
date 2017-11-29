// controllers/upvote-controller

var db = require('../models');
var exports = module.exports = {};

// GET list of all upvotes
exports.getAll = function (req, res) {
  db.upvote.findAll({
    include: [db.user]
  })
  .then(function(upvotes) {
    res.json(upvotes);
  });
};


// POST controller for adding a new upvote
exports.createOne = function (req, res) {
  if (req.isAuthenticated()) {
    findOrCreateUpvote(req, res)
    
  } else {
    var error = {
      isLoggedIn: false,
      message: "Please login to upvote."
    };
    res.json(error)
  };
  
  function findOrCreateUpvote(req, res) {
    req.body.userId = req.user.id;

    db.upvote.findOrCreate({where: req.body})
    .spread(function(upvote, created) {
      if (created) {
        countBingeUpvotes(upvote.bingeId);
      } else {
        deleteUpvote(upvote.id, upvote.bingeId);
      }
      
      res.json({ created: created });
    });       
  };
  
  function countBingeUpvotes(bingeId) {
    db.upvote.count({ 
      where: { 
        bingeId: bingeId
      } 
    })
    .then(function(count) {
      updateBingeUpvotes(bingeId, count);
    })

    function updateBingeUpvotes(bingeId, count) {
      db.binge.update({
        upvotes: count,
      }, {
        where: {
          id: bingeId 
        }
      });       
    };
       
  };
  
  function deleteUpvote (upvoteId, bingeId) {
    db.upvote.destroy({
      where: {
        id: upvoteId
      }
    });
    countBingeUpvotes(bingeId);
  }
};