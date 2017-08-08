 const User = require('../models/users');

 module.exports = {
     showUserCreate: showUserCreate,
     createUser: createUser

 }

 function showUserCreate(req, res) {
     res.render('pages/users');
 }

 function createUser(req, res) {

 }
