const express = require('express');
const Route = express.Router();
const SocialsController = require('../Controller/Socials');
const { authenticate } = require('../hooks/auth');
const Socials =new SocialsController();
const upload = require('../hooks/Multer')

Route.post('/socials/create',authenticate,upload.single('icon'),  Socials.createbanner)
Route.get('/socials/find',authenticate,  Socials.SocialRecords)


module.exports =  Route;