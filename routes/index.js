const routes = require('express').Router();
const w1assignment = require('../controllers/w1assignment');

// Routes
routes.get('/', w1assignment.helloRoute); 
routes.get('/bye', w1assignment.byeRoute);

module.exports = routes; 