var exports = module.exports = {}

exports.signup = function(req, res) {
	var isAuthenticated = req.isAuthenticated();
	if (isAuthenticated) {
		return res.redirect('/');
	}
	res.render('signup', { message: req.flash('signupMessage') });
}

exports.login = function(req, res) {
	var isAuthenticated = req.isAuthenticated();
	if (isAuthenticated) {
		return res.redirect('/');
	}
	res.render('login', { message: req.flash('loginMessage') });
}

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
  	res.redirect('/');
  });
}
