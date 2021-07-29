'use strict';

module.exports = (req, res, next) => {
    if (!req.body.name || !req.body.description) {
        next('Invalid req data');
    } else {
        next();
    }
};