var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'i am kishan patel',
    condition: true,
    Array: [1, 2, 3],
  });
});

module.exports = router;