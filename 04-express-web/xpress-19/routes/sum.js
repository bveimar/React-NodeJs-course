var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('sum', {});
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  let data = { result: Number(req.body.A) + Number(req.body.B) };
  res.render('sum', data);
});

module.exports = router;