var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var carousel = require('angular-ui-carousel');

var port = 8080;

var conn = massive.connectSync({
  connectionString : 'postgres://postgres:B710Ljr9v@@localhost/fitforadventures'
});

var app = module.exports = express();
app.use(bodyParser.json());
passport.use(new localStrategy(function(username, password, done) {
  User.findOne({username: username}, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, {message: 'Incorrect username'});
    }
    if (!user.validPassword(password)) {
      return done(null, false, {message: 'Incorrect password'});
    }
    return done(null, user);
  });
}));

app.set('db', conn);

app.use(express.static('../public'));
app.use(bodyParser.json());

// app.get(blog);
// app.get(tours);

// app.post(new blog);

app.listen(port, function() {
    console.log('Listening on port ', port);
});