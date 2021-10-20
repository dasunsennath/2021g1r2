
const bcrypt = require('bcryptjs');

module.exports.ConfigPasswordAndImage = (req)=>
{
    var salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password,salt);
    if(req.file)
    {
      req.body.image = req.file.path;
    }
    return req;
}