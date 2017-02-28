var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var mongojs = require('mongojs');

var router = express.Router();
var db = mongojs('mongodb://localhost/testdb');

/* GET All employees */
router.get('/employees/search-list', function(req, res, next) {
    db.employee.find(function(err, employees) {
        if (err) {
            res.send(err);
        } else {
            res.json(employees);
        }
    });
});

module.exports = router;