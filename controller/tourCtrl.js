var app = require('../server');
var db = app.get('db');

module.exports = {
    get: function(req, res) {
        db.get_tours(function(err, tours) {
            if (err) {
                console.log(err);
            } else {
                res.send(tours);
            }
        });
    },
    getOne: function(req, res) {
        db.get_tours([req.params.id], function(err, tours) {
            res.json(tours);
        });
    },
    create: function(req, res) {
        db.create_tour([req.body.title, req.body.content, req.body.gear, req.body.price, req.body.image], function(err, tours) {
            res.send(tours[0]);
        });
    },
    update: function(req, res) {
        db.update_tour(req.body.id, req.body.title, req.body.content, req.body.gear, req.body.price, req.body.image, function(err, tours) {
            res.send(tours[0]);
        });
    },
    delete: function(req, res) {
        db.delete_tour(req.params.id, function(err, tours) {
            res.send(tours);
        });
    }
}; 