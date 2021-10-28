const pool = require("../Configure/config");

module.exports.findAll = (callBack) => {
  pool.query(
    "SELECT * FROM `User` order by Score DESC",
    (err, result, fields) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.findAllWithoutAdmin = (callBack) => {
  pool.query(
    "SELECT * FROM `User` where Admin=0 order by Score DESC",
    (err, result, fields) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.insertOne = (user, callback) => {
  pool.query(
    "insert into User(Fname,Lname,Image,Email,Password) values(?,?,?,?,?)",
    [user.fname, user.lname, user.image, user.email, user.password],
    (err, result, fields) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.findOneByID = (user, callback) => {
  pool.query(
    "Select * from User where ID =?",
    [user.ID],
    (err, result, fields) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.findOneAndUpdade = (user, ID, callback) => {
  pool.query(
    "Update User set Fname=?,Lname = ?,Email = ?,Password = ? where ID = ?",
    [user.fname, user.lname, user.email, user.password, ID.ID],
    (err, result, fields) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.updateImage = (Image, ID, callback) => {
  pool.query(
    "Update User set Image=? where ID = ?",
    [Image.image, ID.ID],
    (err, result, fields) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    }
  );
};
module.exports.updateScore = (user, score, callback) => {
  pool.query(
    "Update User set Score=? where ID =?",
    [score.score, user.ID],
    (err, result, fields) => {
      if (err) {
        return callback(error);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.userSingIn = (user, callback) => {
  pool.query(
    "select * from User where Email =?",
    [user.email],
    (err, result, fields) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.deleteOne = (user, callBack) => {
  pool.query("delete from User where ID =?", [user.ID], (err, result) => {
    if (err) {
      return callBack(err);
    } else {
      return callBack(null, result);
    }
  });
};
