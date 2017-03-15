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

var blogCtrl = require('./blogCtrl');
var tourCtrl = require('./tourCtrl');
var userCtrl = require('./userCtrl');

app.use(express.static('../public'));
app.use(bodyParser.json());

app.get('/url', blogCtrl/tourCtrl/userCtrl.functionName);

app.post('/url', blogCtrl/tourCtrl/userCtrl.functionName);

app.put('/url', blogCtrl/tourCtrl/userCtrl.functionName);

app.delete('/url', blogCtrl/tourCtrl/userCtrl.functionName);

app.listen(port, function() {
    console.log('Listening on port ', port);
});