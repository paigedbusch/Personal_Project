var app = require('../server');
var db = app.get('db');

module.exports = {
    get: function(req, res) {
        db.get_blogs(function(err, blogs) {
            if (err) return console.log(err, 'err at get_blogs');
        });
    },
    getOne: function(req, res) {
        db.get_blog([req.params.id], function(err, blogs) {
            if (err) return console.log(err, 'err at get_blog');
            res.json(blogs[0]);
        });
    },
    create: function(req, res) {
        db.create_blog([req.body.title, req.body.content, req.body.image], function(err, blogs) {
            if (err) return console.log(err, 'err at create_blog');
            res.send(blogs[0]);
        });
    },
    update: function(req, res) {
        db.update_blog(req.body.id, req.body.title, req.body.content, req.body.image, function(err, blogs) {
            if (err) return console.log(err, 'err at update_blog');
            res.send(blogs[0]);
        });
    },
    delete: function(req, res) {
        db.delete_blog(req.params.id, function(err, blogs) {
            if (err) return console.log(err, 'err at delete_blog');
            res.send(blogs);
        });
    }
};