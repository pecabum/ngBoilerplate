'use strict';
var express = require('express'),
    controller = require('./main.controller'),
    router = express.Router();

router.get('/', controller.index);

module.exports = router;
