const pool = require("../Configure/config");

module.exports.findAll = (ID, callBack) => {
  pool.query(
    "SELECT * FROM `quiz` WHERE course_id =?",
    [ID.ID],
    (err, result, fields) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};

module.exports.insertOne = (quiz, course, callback) => {
  pool.query(
    "insert into quiz(question,score,c_answer,w_answer1,w_answer2,w_answer3,quiz_no,course_id) values(?,?,?,?,?,?,?,?)",
    [
      quiz.question,
      quiz.score,
      quiz.c_answer,
      quiz.w_answer1,
      quiz.w_answer2,
      quiz.w_answer3,
      quiz.quiz_no,
      course.ID,
    ],
    (err, result, fields) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.findOneByID = (quiz, callback) => {
  pool.query(
    "Select * from quiz where ID =? and course_id=?",
    [quiz.quizID, quiz.ID],
    (err, result, fields) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.findOneAndUpdade = (quiz, key, callback) => {
  pool.query(
    "Update quiz set question=?,score=?,c_answer=?,w_answer1=?,w_answer2=?,w_answer3=?,quiz_no=?, course_id=? where ID = ?",
    [
      quiz.question,
      quiz.score,
      quiz.c_answer,
      quiz.w_answer1,
      quiz.w_answer2,
      quiz.w_answer3,
      quiz.quiz_no,
      key.ID,
      key.quizID,
    ],
    (err, result, fields) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.updateScore = (quiz, callback) => {
  pool.query(
    "Update quiz set score=? where ID =?",
    [quiz.score, quiz.id],
    (err, result, fields) => {
      if (err) {
        return callback(error);
      } else {
        return callback(null, result);
      }
    }
  );
};

module.exports.deleteOne = (quiz, callBack) => {
  pool.query(
    "delete from quiz where ID =? AND course_id=?",
    [quiz.quizID, quiz.ID],
    (err, result) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, result);
      }
    }
  );
};
