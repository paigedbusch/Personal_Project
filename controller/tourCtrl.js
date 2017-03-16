var app = require('../server');

module.exports = {
    get: function() {
        var db = app.get('db');
        db.get_tours(function(err, tours) {
            res.send(tours);
        });
    },
    create: function() {
        var db = app.get('db');
        db.create_tour([req.body.title, req.body.content, req.body.gear, req.body.price, req.body.image], function(err, tours) {
            tours.push(req.body);
            res.send(tours);
        });
    },
    update: function() {
        var db = app.get('db');
        db.update_tour(function(err, tours) {
            for (var i = 0; i < tours.length; i++) {
                if (req.body.id === tours[i].id) {
                    tours[i] = req.body;
                }
            }
            res.send(tours);
        });
    },
    delete: function() {
        var db = app.get('db');
        db.delete_tour(function(err, tours) {
            for (var i = 0; i < tours.length; i++) {
                if (req.body.id === tours[i].id) {
                    delete tours[i];
                }
            }
            res.send(tours);
        });
    }
}; 