var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/features', function(req, res, next) {
  res.send({data: [
    "use scss",
    "use seperated routes",
  ]})
});


module.exports = router;
