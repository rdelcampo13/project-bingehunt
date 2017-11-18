var exports = module.exports = {}

exports.home = function(req, res) {
	res.render('home', { isAuthenticated: req.isAuthenticated() });
};

exports.add = function(req, res) {
	res.render('add', { isAuthenticated: req.isAuthenticated() });
};

exports.dashboard = function(req, res) {
	// console.log(req.user);
	res.render('dashboard', { user: req.user });
};

