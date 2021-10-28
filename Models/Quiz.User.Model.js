const pool = require("../Configure/config");

module.exports.getAll = (user, course, callBack) => {
  pool.query(
    "SELECT Q.* FROM quiz Q,quiz_student QS WHERE (Q.ID>=QS.quiz_id) AND (Q.course_id =?) AND (QS.student_id = ?)",
    [course.ID, user.ID],
    (err, result) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.getCompleteCourse = (user, callBack) => {
  pool.query(
    "SELECT C.* FROM course C,quiz_student QS WHERE (C.ID =QS.course_id) AND (QS.student_id = ?) ",
    [user.ID],
    (err, result) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.insert = (user, course, callBack) => {
  pool.query(
    "INSERT INTO quiz_student VALUES(?,?,?)",
    [user.ID, course.ID, course.QID],
    (err, result) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.update = (user, course, callBack) => {
  pool.query(
    "UPDATE quiz_student SET quiz_id = ? WHERE course_id = ? AND student_id = ?  ",
    [course.QID, course.ID, user.ID],
    (err, result) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.delete = (user, course, callBack) => {
  pool.query(
    "DELETE FROM quiz_student WHERE student_id=? AND course_id=?",
    [user.ID, course.ID],
    (err, result) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};
