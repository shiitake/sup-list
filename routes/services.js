var express = require('express');
var router = express.Router();
var services = require('../data/services.json');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(services);
});

module.exports = router;