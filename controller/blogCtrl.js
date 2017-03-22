var app = require('../server');
var db = app.get('db');

module.exports = {
    get: function(req, res) {
        db.get_blogs(function(err, blogs) {
            if (err) return console.log(err, 'err at get_blogs');
            else res.status(200).send(blogs);
        });
    },
    getOne: function(req, res) {
        db.get_blog([req.params.id], function(err, blogs) {
            if (err) return console.log(err, 'err at get_blog');
            res.json(blogs[0]);
        });
    },
    create: function(req, res) {
        db.create_blog([req.body.title, req.body.contentA, req.body.imageA, req.body.descriptionA, req.body.imageB, req.body.descriptionB, req.body.contentB, req.body.imageC, req.body.descriptionC, req.body.imageD, req.body.descriptionD, req.body.contentC, req.body.imageE, req.body.descriptionE, req.body.imageF, req.body.descriptionF], function(err, blogs) {
            if (err) return console.log(err, 'err at create_blog');
            res.send(blogs[0]);
        });
    },
    update: function(req, res) {
        db.update_blog(req.body.id, req.body.title, req.body.contenta, req.body.imagea, req.body.descriptiona, req.body.imageb, req.body.descriptionb, req.body.contentb, req.body.imagec, req.body.descriptionc, req.body.imaged, req.body.descriptiond, req.body.contentc, req.body.imagee, req.body.descriptione, req.body.imagef, req.body.descriptionf, function(err, blogs) {
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