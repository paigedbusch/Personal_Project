var app = require('../server');
var db = app.get('db');

module.exports = {
    get: function(req, res) {
        db.get_blogs(function(err, blogs) {
            if (err) {
                console.log(err)
            } else {
             
            res.send(blogs);   
            }
        });
    },
    create: function() {
        db.create_blog([req.body.title, req.body.content, req.body.image], function(err, blogs) {
            blogs.push(req.body);
            res.send(blogs);
        });
    },
    update: function() {
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