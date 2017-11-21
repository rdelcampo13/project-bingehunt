// models/binge.js

module.exports = function(sequelize, Sequelize) {

	var Binge = sequelize.define('binge', {
		title: { type: Sequelize.STRING, notEmpty: true },
		type: { type: Sequelize.STRING, notEmpty: true },
		platform: { type: Sequelize.STRING, notEmpty: true },
    short_desc: { type: Sequelize.STRING, notEmpty: true },
    upvotes: { type: Sequelize.INTEGER, defaultValue: 1 },
	});

	Binge.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Binge.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

	return Binge;

}