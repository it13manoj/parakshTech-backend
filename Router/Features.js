const express = require('express');
const Route = express.Router();
const FeaturesController = require('../Controller/Features');
const { authenticate } = require('../hooks/auth');
const Features =new FeaturesController();
const upload = require('../hooks/Multer')

Route.post('/features/create',authenticate,upload.single('icon'),  Features.createbanner)
Route.get('/features/find',authenticate,  Features.FeatureRecords)


module.exports =  Route;