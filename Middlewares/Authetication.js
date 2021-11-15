const jwt = require('jsonwebtoken');
const Passpost_jwt = require('passport-jwt');
const Passport = require('passport');
const JWTStratergy = Passpost_jwt.Strategy;
const ExtractJwt = Passpost_jwt.ExtractJwt;
const UserModel = require('../Models/Users.Model');


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
    UserModel.findOneByIDWithAdmin({ID:payload.id},(err,user)=>
    {
        if(err)
        {
           return done(err,false);
        }
        else if(user)
        { 
           
           return done(null,user[0]);
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
          err.status = 403;
          return next(err);
       }
       if(user.length==0)
       {
          var err =new Error("There is no User with given Email Address");
          err.status = 403;
          return next(err);
       }
       else{
        var match = bcryptjs.compareSync(req.body.password,user[0].Password)
       if(match)
       {
         req.user = user[0];
         return next();
       }
       else
       {
           var Err = new Error("Password is Not Match");
           return next(Err);
       }
    }
   });
}

module.exports.VerifyAdmin = (req,res,next)=>
{
    console.log(req.user);
    if(req.user.Admin===1)
    {
        return next();
    }
    else
    {
        res.statusCode = 401;
        res.end("Unauthorized")

    }
}