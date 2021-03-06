'use strict';
var path = require('path'),
    _ = require('lodash');

var all = {
    env: process.env.NODE_ENV,

    root: path.normalize(__dirname + '/../../..'),

    port: process.env.PORT || 3000,

    mongo: {
        options: {
            db: {
                safe: true
            }
        }
    }
};

module.exports = _.merge(all, require('./' + process.env.NODE_ENV + '.js') || {});
