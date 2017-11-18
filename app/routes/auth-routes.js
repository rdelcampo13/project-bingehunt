var authController = require('../controllers/auth-controller.js');

module.exports = function(app, passport) {

  // Signup Page
  app.get('/signup', authController.signup);

  app.post('/signup', passport.authenticate('local-signup',  {
      successRedirect: '/',
      failureRedirect: '/signup',
      failureFlash : true // allow flash messages
    }
  ));

  // Login Page
  app.get('/login', authController.login);

  app.post('/login', passport.authenticate('local-signin',  {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash : true // allow flash messages
  }
  ));

  // Logout Page
  app.get('/logout', authController.logout);

}






