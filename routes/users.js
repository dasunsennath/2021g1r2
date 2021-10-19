var express = require('express');
const bcrypt = require('bcryptjs');
var router = express.Router();
const UserController = require('../Controllers/User.Controller');
const UPloadImage = require('../Middlewares/UploadImage');

/* GET users listing. */
router.get('/', function(req, res, next) {
UserController.GetAllUser(req,res,next);
});

router.post('/',UPloadImage.single('image') ,(req,res,next)=>
{
    var salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password,salt);
    if(req.file)
    {
      req.body.name = req.file.filename;
    }
 
    UserController.AddUser(req,res,next);
});
module.exports = router;
