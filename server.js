var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var port = 8080;

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static( __dirname ));

var config = require('./config');

var conn = massive.connectSync({connectionString: config.elephantsql})
app.set('db', conn);
var db = app.get('db');

// db.set_tables(function(err, res) {
//     if (err) return console.log(err, 'err at set_tables');
//     else console.log('tables successfully reset');
// });

tourCtrl = require('./controller/tourCtrl');
blogCtrl = require('./controller/blogCtrl');

app.get('/api/blog', blogCtrl.get);
app.get('/api/blog/:id', blogCtrl.getOne);
app.get('/api/tours', tourCtrl.get);
app.get('/api/tours/:id', tourCtrl.getOne);

app.post('/api/new_blog', blogCtrl.create);
app.post('/api/new_tour', tourCtrl.create);

app.put('/api/update_blog', blogCtrl.update);
app.put('/api/update_tour', tourCtrl.update);

app.delete('/api/delete_blog/:id', blogCtrl.delete);
app.delete('/api/delete_tour/:id', tourCtrl.delete);

app.listen(port, function() {
    console.log('Listening on port ', port);
});

app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: 'keyboardcat'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new localStrategy(function(username, password, done) {
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

passport.serializeUser(function(user, done) {
  return done(null, user);
});

passport.deserializeUser(function(user, done) {
  return done(null, user);
});

app.get('/logout', function(req, res) {
  req.logout();
  console.log('successful logout');
  res.redirect('/');
});

app.get('/auth/me', function(req, res) {
  if (req.user) {
    console.log(req.user);
    res.status(200).send(req.user);
  } else {
    console.log('no user')
    res.status(200).send('');
  }
});

app.post('/login', passport.authenticate('local'), function(req, res) {
    res.status(200).send(req.user);
}
);