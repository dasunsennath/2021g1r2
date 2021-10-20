var express = require('express');
const UserController = require('../Controllers/User.Controller');
const UPloadImage = require('../Middlewares/UploadImage');
const configPassANdImage= require('../Configure/Password&ImageConfig');
const authenticate = require('../Middlewares/Authetication');

const router = express.Router();

router.route('/')
.get(authenticate.VerifyUser,(req,res,next)=>
{
    UserController.GetOneUseByID(req,res,next);
})

.post((req,res,next)=>
{
    res.statusCode = 403;
    res.end(`System Not allow to have POST methon on Profile${req.url} EndPoint`);
})

.put(authenticate.VerifyUser,UPloadImage.single('image'),(req,res,next)=>
{
    req= configPassANdImage.ConfigPasswordAndImage(req);
    UserController.UpdateUser(req,res,next);
})

.delete(authenticate.VerifyUser,(req,res,next)=>
{
    UserController.DeleteUser(req,res,next);
});

router.route('/:ID')
.delete(authenticate.VerifyUser,authenticate.VerifyAdmin,(req,res,next)=>
{
    UserController.DeleteUserForAdmin(req,res,next)
})

module.exports = router;