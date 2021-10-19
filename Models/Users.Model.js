
const pool = require('../Configure/config');



  module.exports.findAll= (callBack)=>
   {
     pool.query('SELECT * FROM `User` order by Score DESC',(err,result,fields)=>
     {   
      
         if(err)
         {
           return callBack(err);
         }
         else
         {
           
           return callBack(null,result);
         }
      
     });
   }

   module.exports.insertOne = (user,callback)=>
   {
     pool.query('insert into User(Fname,Lname,Image,ImageType,ImageName,Email,Password) values(?,?,?,?,?,?,?)',[user.fname,user.lname,user.image,user.type,user.name,user.email,user.password],(err,result,fields)=>
     {
       if(err)
       {
         return callback(err);
       }
       else
       {
         return callback(null,result);
       }
    
     });
   }

   module.exports.findOneByID = (user,callback)=>
   {
     pool.query('Select * from User where ID =?',[user.id],(err,result,fields)=>
     {
      if(err)
      {
        return callback(err);
      }
      else
      {
        return callback(null,result);
      }
   
     })
   }

   module.exports.findOneAndUpdade=(user,callback)=>
   {
     pool.query('Update User set Fname=?,Lname = ?,Image = ?,Email = ?,Password = ? where ID = ?',[user.fname,user.lname,user.image,user.email,user.password,user.id],(err,result,fields)=>
     {
        if(err)
        {
          return callback(err);
        }
        else
        {
          return callback(null,result);
        }
     
     });
   }
   module.exports.updateScore=(user,callback)=>
   {
    pool.query('Update User set Score=? where ID =?',[user.score,user.id],(err,result,fields)=>
    {
       if(err)
         {
           return callback(error);
         }
         else
         {
           return callback(null,result);
         }
    });
   }

   module.exports.userSingIn = (user,callback)=>
  {
     pool.query('select * where Email =?',[user.email],(err,result,fields)=>
     {
       if(err)
       {
         return callback(err);
       }
       else
       {
         return callback(null,result);
       }
    
     });
  }

  
   
