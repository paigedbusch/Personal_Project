var app = require('../server');
var db = app.get('db');

module.exports = {
    get: function(req, res) {
        db.get_tours(function(err, tours) {
            if (err) return console.log(err, 'err at get_tours');
        });
    },
    getOne: function(req, res) {
        db.get_tour([req.params.id], function(err, tours) {
            if (err) return console.log(err, 'err at get_tour');
            res.send(tours[0]);
        });
    },
    create: function(req, res) {
        db.create_tour([req.body.title, req.body.content, req.body.gear, req.body.price, req.body.image], function(err, tours) {
            if (err) return console.log(err, 'err at create_tour');
            res.send(tours[0]);
        });
    },
    update: function(req, res) {
        db.update_tour(req.body.id, req.body.title, req.body.content, req.body.gear, req.body.price, req.body.image, function(err, tours) {
            if (err) return console.log(err, 'err at update_tour');
            res.send(tours[0]);
        });
    },
    delete: function(req, res) {
        db.delete_tour(req.params.id, function(err, tours) {
            if (err) return console.log(err, 'err at delete_tour');
            res.send(tours);
        });
    }
}; 