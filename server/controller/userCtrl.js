var app = require('./server');

module.exports = {
    create: function() {
        var db = app.get('db');
    },
    update: function() {
        var db = app.get('db');
    },
    delete: function() {
        var db = app.get('db');
    }
}