module.exports = function(app) {

  // Redirect all undefined routes to home page
  app.get('*', function(req, res) {
    res.redirect('/');
  });
}