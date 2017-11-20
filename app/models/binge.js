// models/binge.js

module.exports = function(sequelize, Sequelize) {

	var Binge = sequelize.define('binge', {
		title: { type: Sequelize.STRING, notEmpty: true },
	    type: { type: Sequelize.STRING, notEmpty: true },
	    short_desc: { type: Sequelize.STRING, notEmpty: true },
	    long_desc: { type: Sequelize.STRING, notEmpty: true },
	    img_url: { type: Sequelize.STRING, notEmpty: true },
	    upvotes: { type: Sequelize.STRING, notEmpty: true },
	});

	return Binge;

}