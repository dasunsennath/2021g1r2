// module.exports = {
//     'DB_URL': process.env.DB_URL,
//     'Secret': process.env.Secret
// }

const {createPool} = require('mysql');
require('dotenv').config()

const pool = createPool({
    connectionLimit : 10,
    host            : process.env.Host,
    user            : process.env.User,
    password        : process.env.Password,
    database        : process.env.DataBase,
  });

module.exports = pool;