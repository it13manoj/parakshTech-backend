const express = require('express');
const Route = express.Router();
const HomeController = require('../Controller/Home');
const { authenticate } = require('../hooks/auth');
const Home =new HomeController();
const upload = require('../hooks/Multer')

Route.post('/home/create',authenticate,upload.single('icon'),  Home.createbanner)
Route.get('/home/find',authenticate,  Home.HomeRecords)


module.exports =  Route;