const express = require('express');
const Route = express.Router();
const TestimonialController = require('../Controller/Testimonial');
const { authenticate } = require('../hooks/auth');
const Testimonial =new TestimonialController();
const upload = require('../hooks/Multer')

Route.post('/testimonial/create',authenticate,upload.single('icon'),  Testimonial.createbanner)
Route.get('/testimonial/find',authenticate,  Testimonial.TestimonialRecords)


module.exports =  Route;