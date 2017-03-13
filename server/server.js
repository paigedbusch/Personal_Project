var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8080;

app.use(express.static('../public'));
app.use(bodyParser.json());

// app.get(blog);
// app.get(tours);

// app.post(new blog);

app.listen(port, function() {
    console.log('Listening on port ', port);
});