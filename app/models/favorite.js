// models/favorite.js

module.exports = function(sequelize, Sequelize) {

	var Favorite = sequelize.define('favorite', {
	});

	Favorite.associate = function(models) {
    // Every Favorite should belong to a User
    // An Favorite can't be created without a User due to the foreign key constraint
    Favorite.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });

		// Every Favorite should belong to a Binge as well
    // An Favorite can't be created without a Binge due to the foreign key constraint
		Favorite.belongsTo(models.binge, {
      foreignKey: {
        allowNull: false
      }
    });

  };

	return Favorite;

}