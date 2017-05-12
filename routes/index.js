var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('http://127.0.0.1:3000/dist/index.html');
});

module.exports = router;