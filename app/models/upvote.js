// models/upvote.js

module.exports = function(sequelize, Sequelize) {

	var Upvote = sequelize.define('upvote', {
	});

	Upvote.associate = function(models) {
    // Every Upvote should belong to a User
    // An Upvote can't be created without a User due to the foreign key constraint
    Upvote.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });

		// Every Upvote should belong to a Binge as well
    // An Upvote can't be created without a Binge due to the foreign key constraint
		Upvote.belongsTo(models.binge, {
      foreignKey: {
        allowNull: false
      }
    });

  };

	return Upvote;

}