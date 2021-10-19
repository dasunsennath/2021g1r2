const jwt = require('jsonwebtoken');
const Passpost_jwt = require('passport-jwt');
const Passport = require('passport');
const JWTStratergy = Passpost_jwt.Strategy;
const ExtractJwt = Passpost_jwt.ExtractJwt;
//const UserController = require('../Controllers/User.Controller');
const UserModel = require('../Models/Users.Model');
require('dotenv').config();
const bcryptjs = require('bcryptjs');


module.exports.getToken= (user)=>
{
    return jwt.sign(user,process.env.Secret);
}

const opts={}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.Secret;

module.exports.jwt =Passport.use(new JWTStratergy(opts,(payload,done)=>
{ 
    UserModel.findOneByID({id:payload.id},(err,result)=>
    {
        if(err)
        {
           return done(err,false);
        }
        if(result)
        {
           return done(null,result);
        }
        else
        {
          return  done(null,false);
        }
    })
}));


module.exports.VerifyUser = Passport.authenticate('jwt',{session:false});

module.exports.authenticate = (req,res,next)=>
{
   UserModel.userSingIn(req.body,(err,user)=>
   {
       if(err)
       {
          return next(err);
       }
       if(bcryptjs.compareSync(req.body.password,user.Password))
       {
         return next();
       }
       else
       {
           var Err = new Error("Password is Not Match");
           return next(Err);
       }

   });
}