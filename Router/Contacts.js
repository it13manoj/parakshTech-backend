const express = require('express');
const Route = express.Router();
const ContactsController = require('../Controller/Contacts');
const { authenticate } = require('../hooks/auth');
const Contacts =new ContactsController();
const upload = require('../hooks/Multer')

Route.post('/contacts/create',authenticate,upload.single('icon'),  Contacts.createbanner)
Route.get('/contacts/find',authenticate,  Contacts.ContactsRecords)


module.exports =  Route;