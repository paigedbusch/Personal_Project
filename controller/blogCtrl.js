var app = require('../server');

module.exports = {
    get: function() {
        var db = app.get('db');
        db.get_blogs(function(err, blogs) {
            res.send(blogs);
        });
    },
    create: function() {
        var db = app.get('db');
        db.create_blog([req.body.title, req.body.content, req.body.image], function(err, blogs) {
            blogs.push(req.body);
            res.send(blogs);
        });
    },
    update: function() {
        var db = app.get('db');
        db.update_blog(function(err, blogs) {
            for (var i = 0; i < blogs.length; i++) {
                if (req.body.id === blogs[i].id) {
                    blogs[i] = req.body;
                }
            }
            res.send(blogs);
        });
    },
    delete: function() {
        var db = app.get('db');
        db.delete_blog(function(err, blogs) {
            for (var i = 0; i < blogs.length; i++) {
                if (req.body.id === blogs[i].id)  {
                    delete blogs[i];
                }
            }
            res.send(blogs);
        });
    }
};