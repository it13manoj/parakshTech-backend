const express = require('express');
const Route = express.Router();
const ServicesController = require('../Controller/Services');
const { authenticate } = require('../hooks/auth');
const Services =new ServicesController();
const upload = require('../hooks/Multer')

Route.post('/services/create',authenticate,upload?.single('icon'),  Services.createbanner)
Route.get('/services/find',authenticate,  Services.ServicesRecords)


module.exports =  Route;