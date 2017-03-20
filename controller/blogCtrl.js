var app = require('../server');
var db = app.get('db');

module.exports = {
    get: function(req, res) {
        db.get_blogs(function(err, blogs) {
            if (err) {
                console.log(err);
            } else {
            res.send(blogs);   
            }
        });
    },
    getOne: function(req, res) {
        db.get_blog([req.params.id], function(err, blogs) {
            res.json(blogs[0]);
        });
    },
    create: function(req, res) {
        db.create_blog([req.body.title, req.body.content, req.body.image], function(err, blogs) {
            blogs.push(req.body);
            res.send(blogs);
        });
    },
    update: function(req, res) {
        db.update_blog(function(err, blogs) {
            for (var i = 0; i < blogs.length; i++) {
                if (req.body.id === blogs[i].id) {
                    blogs[i] = req.body;
                }
            }
            res.send(blogs);
        });
    },
    delete: function(req, res) {
        db.delete_blog(req.params.id, function(err, blogs) {
            res.send(blogs);
        });
    }
};