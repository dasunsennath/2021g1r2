

const UserModel = require('../Models/Users.Model');
const{readFileSync} =require('fs');


module.exports.GetAllUser = (req,res,next)=>
{
    UserModel.findAll((err,result)=>
    {
        if(err)
        {
            res.statusCode = 500;
            res.setHeader('Content-Type','application/json');
            res.json({success:0 ,message:"Databse connection Error" ,err:err});
        }
        else
        {
           res.statusCode = 200; 
           res.setHeader('Content-Type','application/json');
           for(var i=0; i<result.length;i++)
           {
              result[i].Image=readFileSync(__dirname+"/../public/images/"+result[i].ImageName);
           }
           res.json({success:1,results:result});
        }
    });
}

module.exports.AddUser=(req,res,next)=>
{ 
     
    UserModel.insertOne(req.body,(err,result)=>
    {
        if(err)
        {
            res.statusCode = 500;
            res.setHeader('Content-Type','application/json');
            res.json({success:0,message:"given Email address already exist",err:err});
        }
        else
        {
            res.statusCode = 200; 
           res.setHeader('Content-Type','application/json');
           res.json({success:1 ,result:result});
        }
    });
}

module.exports.GetOneUserBYEmail= (req,res,next)=>
{
    UserModel.userSingIn(req.user,(err,result)=>
    {
        if(err)
        {
            res.statusCode = 404;
            res.setHeader('Content-Type','application/json');
            res.json({success:0,message:" There is no user with given Email address",err:err});
        }
        else
        {
            res.statusCode = 200; 
           res.setHeader('Content-Type','application/json');
           res.json({success:1 ,result:result});
        }
    });
}

module.exports.UpdateUser=(req,res,next)=>
{
    UserModel.findOneAndUpdade(req.use,(err,result)=>
    {
        if(err)
        {
            res.statusCode = 404;
            res.setHeader('Content-Type','application/json');
            res.json({success:0,message:"Update is Unsuccessfull",err:err});
        }
        else
        {
           res.statusCode = 200; 
           res.setHeader('Content-Type','application/json');
           res.json({success:1 ,result:result});
        }

    });
}
module.exports.GetOneUseByID = (req,res,next)=>
{
    UserModel.findOneByID(req.user,(err,result)=>
    {
        if(err)
        {
            res.statusCode = 404;
            res.setHeader('Content-Type','application/json');
            res.json({success:0,message:"There is No User with given ID",err:err});
        }
        else
        {
           res.statusCode = 200; 
           res.setHeader('Content-Type','application/json');
           res.json({success:1 ,result:result});
        }

    });
}

