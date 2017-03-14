var express = require('express');
var bodyParser = require('body-parser');
var massive = require("massive");

var port = 8080;

var conn = massive.connectSync({
  connectionString : "postgres://postgres:B710Ljr9v@@localhost/fitforadventures"
});

var app = module.exports = express();

app.set('db', conn);

app.use(express.static('../public'));
app.use(bodyParser.json());

// app.get(blog);
// app.get(tours);

// app.post(new blog);

app.listen(port, function() {
    console.log('Listening on port ', port);
});