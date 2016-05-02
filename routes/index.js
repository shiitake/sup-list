var express = require('express');
var router = express.Router();
var services = require('../data/services.json');


/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', { title: 'Usenet Provider Guide', services: services });
});

module.exports = router;