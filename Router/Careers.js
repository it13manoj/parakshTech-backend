const express = require('express');
const Route = express.Router();
const CareerController = require('../Controller/Careers');
const { authenticate } = require('../hooks/auth');
const Career =new CareerController();
const upload = require('../hooks/Multer')

Route.post('/career/create',authenticate,upload.single('icon'),  Career.banner)
Route.get('/career/find',authenticate,  Career.Records)


module.exports =  Route;