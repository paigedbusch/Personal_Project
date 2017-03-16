var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var blogCtrl = require('./controller/blogCtrl');
var tourCtrl = require('./controller/tourCtrl');
var userCtrl = require('./controller/userCtrl');

var port = 8080;

var conn = massive.connectSync({
  connectionString : 'postgres://postgres:B710Ljr9v@@localhost/fitforadventures'
});

var app = module.exports = express();
app.use(bodyParser.json());
app.set('db', conn);
var db = app.get('db');

///////////////
//LOGIN AUTH//
/////////////
passport.use(new localStrategy(function(username, password, done) {
  db.users.findOne({username: username}, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, {message: 'Incorrect username'});
    }
    if (user.password !== password) {
      return done(null, false, {message: 'Incorrect password'});
    }
    return done(null, user);
  });
}));


app.use(express.static('../public'));
app.use(bodyParser.json());

app.post('/login', //set up express sessions for this to work
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login'}), function(req, res) {
    res.status(200).json(req.user);
  }
);
// app.get('/url', blogCtrl/tourCtrl/userCtrl.functionName);

// app.post('/url', blogCtrl/tourCtrl/userCtrl.functionName);

// app.put('/url', blogCtrl/tourCtrl/userCtrl.functionName);

// app.delete('/url', blogCtrl/tourCtrl/userCtrl.functionName);

app.listen(port, function() {
    console.log('Listening on port ', port);
});