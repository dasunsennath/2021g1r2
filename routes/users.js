var express = require('express');

var router = express.Router();
const UserController = require('../Controllers/User.Controller');
const UPloadImage = require('../Middlewares/UploadImage');
const configPassANdImage= require('../Configure/Password&ImageConfig')

/* GET users listing. */
router.get('/', function(req, res, next) {
UserController.GetAllUser(req,res,next);
});

router.post('/singUP',UPloadImage.single('image') ,(req,res,next)=>
{
    req = configPassANdImage.ConfigPasswordAndImage(req);
    UserController.AddUser(req,res,next);
});

router.post('/login',(req,res,next)=>
{
   UserController.userSingIn(req,res,next);
});
module.exports = router;
