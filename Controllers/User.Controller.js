
const UserModel = require('../Models/Users.Model');


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
    UserModel.findOneAndUpdade(req,(err,result)=>
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


module.exports.DeleteUser=(req,res,next)=>
{
    UserModel.DeleteOne(req.user,(err,result)=>
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

module.exports.DeleteUserForAdmin=(req,res,next)=>
{
    UserModel.DeleteOne(req.params,(err,result)=>
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


module.exports.LeaderBoard = (req,res,next)=>
{
    UserModel.findAllWithoutAdmin((err,result)=>
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
           res.json({success:1,results:result});
        }
    })
}