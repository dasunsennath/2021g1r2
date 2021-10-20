
const bcrypt = require('bcryptjs');

module.exports.ConfigPassword = (req)=>
{
  
    var salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password,salt);
    return req;
}

module.exports.ConfigImage = (req)=>
{
  if(req.file)
  {
    req.body.image = req.file.path;
  }
  return req
}