var app = require('../server');
var db = app.get('db');

module.exports = {
    get: function() {
        db.get_tours(function(err, tours) {
            if (err) {
                console.log(err);
            } else {
                res.send(tours);
            }
            res.send(tours);
        });
    },
    create: function() {
        db.create_tour([req.body.title, req.body.content, req.body.gear, req.body.price, req.body.image], function(err, tours) {
            tours.push(req.body);
            res.send(tours);
        });
    },
    update: function() {
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