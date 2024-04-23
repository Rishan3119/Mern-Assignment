const express = require('express')
const UserController = require('../controller/UserController')
const routers = new express.Router()

routers.post('/create',UserController.Createuser);
routers.get('/get',UserController.GetUser);
routers.put('/update/:id',UserController.UpdateUser);
routers.delete('/delete/:id',UserController.DeleteUser);


module.exports = routers;



