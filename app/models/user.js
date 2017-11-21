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
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.binge, {
      onDelete: "cascade"
    });
  };

	return User;

}