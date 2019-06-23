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
router.get('/kishan/:id', function (req, res, ) {

  res.render('test', {

  });
})
router.post('/jokes/submit', function (req, respons, next) {
  res.redirect('test')
})

module.exports = router;