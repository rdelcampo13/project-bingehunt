var htmlController = require('../controllers/html-controller.js');

module.exports = function(app, passport) {

  // Home Page
  app.get('/', htmlController.home);

  // Add Binge Page
  app.get('/add', isLoggedIn, htmlController.add);

  // Dashboard Page
  app.get('/dashboard', isLoggedIn, htmlController.dashboard);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    console.log(req.originalUrl);
    
    switch (req.originalUrl) {
      case "/add":
        res.render('login', { message: 'Please login in to add a new binge.'});                  
        break;
      case "/dashboard":
        res.render('login', { message: 'Please login in to view your profile.'});                  
        break;        
      default:
        res.render('login', { message: 'Please login first'});          
    }
  };
}