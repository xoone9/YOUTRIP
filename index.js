var express = require('express');
var router = express.Router();

//var Destination = require('../models/destination');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOUTRIP' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'YOUTRIP' });
});
router.get('/search', function(req, res, next) {
  res.render('search', { title: 'YOUTRIP' });
});
router.get('/category', function(req, res, next) {
  res.render('category', { title: 'YOUTRIP' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: "YOUTRIP" });
});
router.get('/neardes', function(req, res, next) {
  res.render('neardes', { title: "YOUTRIP" });
});
router.get('/navi', function(req, res, next) {
  res.render('navi', { title: "YOUTRIP" });
});

router.get('/example', function(req, res, next) {
  res.render('example', { title: "YOUTRIP" });
});


module.exports = router;
