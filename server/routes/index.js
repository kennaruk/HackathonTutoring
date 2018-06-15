var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET home page. */
router.get('/names', function(req, res, next) {
  res.json([
    {name: "ken"},
    {name: "boom"}
  ]);
});

module.exports = router;
