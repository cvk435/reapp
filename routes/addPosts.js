var express = require('express');
var router = express.Router();
var addPosts = require('../models/addPosts');

router.post('/', function (req, res, next) {
    console.log(req.body,'routes')
    addPosts.addPosts(req.body,function (err, rows) {
        console.log(err, rows)
            if (err) {
                console.log(err,'eeeeeeeeee')
                res.json(err);
            } else {
                console.log(rows,'rrrrrrr')
                res.json(rows);
            }
        });

});
module.exports = router;