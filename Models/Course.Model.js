const pool = require("../Configure/config");

module.exports.findAll = (callBack) => {
  pool.query("SELECT * FROM course order by ID DESC", (err, result, fields) => {
    if (err) {
      return callBack(err);
    } else {
      return callBack(null, result);
    }
  });
};
module.exports.insertOne = (course, callBack) => {
  pool.query(
    "INSERT INTO course(name,description,image) values(?,?,?)",
    [course.name, course.description, course.image],
    (err, result, fields) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.findOneByID = (course, callBack) => {
  pool.query(
    "SELECT * FROM course WHERE ID=?",
    [course.ID],
    (err, result, fields) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.findOneAndUpdate = (course, ID, callBack) => {
  pool.query(
    "UPDATE course SET name=?,description=?,image=? WHERE ID=? ",
    [course.name, course.description, course.image, ID.ID],
    (err, result, fields) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.deleteOne = (course, callBack) => {
  pool.query("DELETE FROM course WHERE ID=?", [course.ID], (err, result) => {
    if (err) {
      return callBack(err);
    } else {
      return callBack(null, result);
    }
  });
};

module.exports.UpdateImage = (Image, ID, callback) => {
  pool.query(
    "Update course set Image=? where ID = ?",
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

module.exports.DeleteImage = (ID, callback) => {
  pool.query("Delete Image where ID = ?", [ID.ID], (err, result, fields) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, result);
    }
  });
};
