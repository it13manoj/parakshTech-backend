const express = require('express');
const Route = express.Router();
const Users = require('../Controller/Users');
const { authenticate } = require('../hooks/auth');
const UserController =new Users();

Route.post('/users/create',UserController.create)
Route.post('/users/login',UserController.login)
Route.get('/users/find',authenticate,UserController.findOne)


module.exports =  Route;