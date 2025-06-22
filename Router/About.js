const express = require('express');
const Route = express.Router();
const AboutController = require('../Controller/About');
const { authenticate } = require('../hooks/auth');
const About =new AboutController();
const upload = require('../hooks/Multer')

Route.post('/about/create',authenticate,upload.single('icon'),  About.createbanner)
Route.get('/about/find',authenticate,  About.Records)


module.exports =  Route;