// controllers/favorite-controller

var db = require('../models');
var exports = module.exports = {};

// GET list of all favorites
exports.getAll = function (req, res) {
  if (req.isAuthenticated()) {
    getUserFavorites(req, res)
  }
  
  else {
    var error = {
      isLoggedIn: false,
      message: "Please login to favorite."
    };
    res.json(error)    
  }
  
  function getUserFavorites(req, res) {
    db.favorite.findAll({
      where: {
        userId: req.user.id
      },
      order: [
        ['createdAt', 'DESC']
      ],
      include: [db.user],
      include: [db.binge],
    })
    .then(function(favorites) {
      res.json(favorites);
    });    
  }

};


// POST controller for adding a new favorite
exports.createOne = function (req, res) {
  if (req.isAuthenticated()) {
    findOrCreateFavorite(req, res)  
  } 
  
  else {
    var error = {
      isLoggedIn: false,
      message: "Please login to favorite."
    };
    res.json(error)
  };
  
  function findOrCreateFavorite(req, res) {
    req.body.userId = req.user.id;

    db.favorite.findOrCreate({where: req.body})
    .spread(function(favorite, created) {
      if (created) {
        res.json({ created: created, bingeId: favorite.bingeId });
      } else {
        res.json({ created: created });
        deleteFavorite(favorite.id, favorite.bingeId);
      }
    });       
  };

  function deleteFavorite (favoriteId, bingeId) {
    db.favorite.destroy({
      where: {
        id: favoriteId
      }
    });
  }
};