
const pool = require('../Configure/config');


  module.exports.findAll=(callback)=>
   {
     pool.query('SELECT * FROM User order by Score DESC',(error, results, fields)=>
     {   
      pool.end((err)=>{if(err) throw err});
         if(error)
         {
           return callback(error);
         }
         else
         {
           return (null,results);
         }
      
     })
   }

   module.exports.insertOne = (user)=>
   {
     pool.query('insert into User(Fname,Lname,Image,Email,Password) values(?,?,?,?,?)',[user.fname,user.lname,user.image,user.email,user.password],(err,result,fields)=>
     {
      pool.end((err)=>{if(err) throw err});
       if(err)
       {
         return callback(err);
       }
       else
       {
         return (null,result);
       }
    
     })
   }

   module.exports.findOne = (user)=>
   {
     pool.query('Select * from User where ID =?',[user.id],(err,result,fields)=>
     {
      pool.end((err)=>{if(err) throw err});
      if(err)
      {
        return callback(err);
      }
      else
      {
        return (null,result);
      }
   
     })
   }

   module.exports.findOneAndUpdade=(user)=>
   {
     pool.query('Update User set Fname=?,Lname = ?,Image = ?,Email = ?,Password = ?',[user.fname,user.lname,user.image,user.email,user.password],(err,result,fields)=>
     {
        pool.end((err)=>{if(err) throw err});
        if(err)
        {
          return callback(err);
        }
        else
        {
          return (null,result);
        }
     
     });
   }
   module.exports.updateScore=(user)=>
   {
    pool.query('Update User set Score=',[user.score],(err,result,fields)=>
    {
       pool.end((err)=>{if(err) throw err});
       if(err)
         {
           return callback(error);
         }
         else
         {
           return (null,result);
         }
      
      //  return (err,result)
    });
   }

   module.exports.userSingIn = (user)=>
  {
     pool.query('select * where Email =?',[user.email],(err,result,fields)=>
     {
       pool.end((err)=>{if(err) throw err});
       if(err)
       {
         return callback(err);
       }
       else
       {
         return (null,result);
       }
    
     });
  }

  
   
