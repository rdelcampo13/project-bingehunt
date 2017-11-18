// Dependencies ==========================================================
var express    = require('express')
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var exphbs     = require('express-handlebars')
var flash      = require('connect-flash');

var app        = express(); // Set up the express app
var PORT       = process.env.PORT || 3000;
var db         = require("./app/models"); // Requiring our models for syncing

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Setup static directory
app.use(express.static("app/public"));

//For Handlebars
app.set('views', './app/views')
app.set("view engine", ".hbs"); // Setup Handlebars.
app.engine("hbs", exphbs({
  defaultLayout: "main.hbs",
  layoutsDir:'./app/views/layouts',
  partialsDir:'./app/views/partials',
  extname: ".hbs"
}));


// Routes ==========================================================
require('./app/routes/auth-routes.js')(app, passport);
require('./app/routes/html-routes.js')(app, passport);
require('./app/routes/404-routes.js')(app);

//load passport strategies
require('./app/config/passport/passport.js')(passport, db.user);


// Run App ==========================================================
//Sync Database
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




