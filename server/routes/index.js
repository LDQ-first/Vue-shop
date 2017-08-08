var express = require('express');
var router = express.Router();

//二级路由
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
