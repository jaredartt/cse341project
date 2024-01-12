const routes = require('express').Router();
const w1assignment = require('../controllers/w1assignment');

// Routes
routes.get('/', w1assignment.jaredRoute);
routes.get('/ruben', w1assignment.rubenRoute);
routes.get('/pedro', w1assignment.pedroRoute);

module.exports = routes; 