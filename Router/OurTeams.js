const express = require('express');
const Route = express.Router();
const OurTeamsController = require('../Controller/OurTeams');
const { authenticate } = require('../hooks/auth');
const OurTeams =new OurTeamsController();
const upload = require('../hooks/Multer')

Route.post('/our_teams/create',authenticate,upload.single('icon'),  OurTeams.createbanner)
Route.get('/our_teams/find',authenticate,  OurTeams.OurTeamRecords)


module.exports =  Route;