// models/user.js

module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('user', {
		firstname: { type: Sequelize.STRING, notEmpty: true},
		lastname: { type: Sequelize.STRING, notEmpty: true},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
		password : {type: Sequelize.STRING,allowNull: false },
    status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }
	});

	User.associate = function(models) {
    // Associating User with Binges
    // When a User is deleted, also delete any associated Binges
    User.hasMany(models.binge, {
      onDelete: "cascade"
    });

		// Associating User with Upvotes
    // When a User is deleted, also delete any associated Upvotes
		User.hasMany(models.upvote, {
      onDelete: "cascade"
    });


  };

	return User;

}