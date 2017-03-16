var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');
// var passport = require('passport');
// var localStrategy = require('passport-local').Strategy;

var port = 8080;

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static( __dirname + './public'));

var config = require('./config');

var conn = massive.connectSync({connectionString: config.elephantsql})
app.set('db', conn);
var db = app.get('db');

tourCtrl = require('./controller/tourCtrl');
blogCtrl = require('./controller/blogCtrl');
// userCtrl = require('./userCtrl');

app.get('/api/blog', blogCtrl.get);
// app.get('/tours', tourCtrl.get);

// app.post('/api/', blogCtrl.create);
// app.post('/url', tourCtrl.create);

// app.put('/url', blogCtrl.update);
// app.put('/url', tourCtrl.update);

// app.delete('/url', blogCtrl.delete);
// app.delete('/url', tourCtrl.delete);

app.listen(port, function() {
    console.log('Listening on port ', port);
});


// var db = app.get('db');
// var conn = massive.connectSync({
//   connectionString : config.elephantsql
// });

// app.use(session({
//   resave: true, //Without this you get a constant warning about default values
//   saveUninitialized: true, //Without this you get a constant warning about default values
//   secret: 'keyboardcat'
// }));
// app.use(passport.initialize());
// app.use(passport.session());


// app.set('db', conn);

// passport.use(new localStrategy(function(username, password, done) {
//   db.users.findOne({username: username}, function(err, user) {
//     if (err) {
//       return done(err);
//     }
//     if (!user) {
//       return done(null, false, {message: 'Incorrect username'});
//     }
//     if (user.password !== password) {
//       return done(null, false, {message: 'Incorrect password'});
//     }
//     return done(null, user);
//   });
// }));

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login'}), function(req, res) {
//     res.status(200).json(req.user);
//   }
// );