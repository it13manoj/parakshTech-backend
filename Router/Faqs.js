const express = require('express');
const Route = express.Router();
const FaqsController = require('../Controller/Faqs');
const { authenticate } = require('../hooks/auth');
const Faqs =new FaqsController();
const upload = require('../hooks/Multer')

Route.post('/faqs/create',authenticate,upload.single('icon'),  Faqs.banner)
Route.get('/faqs/find',authenticate,  Faqs.records)


module.exports =  Route;