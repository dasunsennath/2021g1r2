var express = require('express');
const UserController = require('../Controllers/User.Controller');
const UPloadImage = require('../Middlewares/UploadImage');
const configPassANdImage= require('../Configure/Password&ImageConfig');
const authenticate = require('../Middlewares/Authetication');



const router = express.Router();

router.get('/alluser',authenticate.VerifyUser,authenticate.VerifyAdmin,(req, res, next)=>{
    UserController.GetAllUser(req,res,next);
});

router.get('/oneuser',authenticate.VerifyUser,authenticate.VerifyAdmin,(req,res,next)=>
{
   UserController.GetOneUserBYEmail(req,res,req.body);
});

router.put('/Image/:ID',authenticate.VerifyUser,authenticate.VerifyAdmin,UPloadImage.single('image'),(req,res,next)=>
{
    req = configPassANdImage.ConfigImage(req);
    UserController.UpdateImage(req,res,req.body,req.params);
});

router.put('/profile/:ID',authenticate.VerifyUser,authenticate.VerifyAdmin,(req,res,next)=>
{
   UserController.UpdateUser(req,res,req.body,req.params);
});

router.delete('/profile/:ID',authenticate.VerifyUser,authenticate.VerifyAdmin,(req,res,next)=>
{
    UserController.DeleteUserForAdmin(req,res,next)
});


module.exports = router;

