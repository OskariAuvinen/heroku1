var express = require('express');
var router = express.Router();
var db = require('../dbService');




router.route('/topics')
.get(function(req, res) {
  db.getTopics()
  .then(res => res.json())
            .then(data=>postData(data))
});

module.exports = router;
