var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./public/dist/index.html', 'utf8', function(err, data){
    if(err){
      console.log(err);
      res.writeHead(500, {
        "Content-type": 'text/palin'
      });
      res.end('后台错误！');
    }

    if(data){
      res.writeHead(200, {
        "Content-type": 'text/html'
      });
      res.end(data);
    }
  })
});

module.exports = router;
