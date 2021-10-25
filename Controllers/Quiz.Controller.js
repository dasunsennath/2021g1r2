const QuizModel = require("../Models/Quiz.Model");

module.exports.GetallQuiz = (req, res, next) => {
  QuizModel.findAll(req.params, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "Databse connection Error",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, results: result });
    }
  });
};

module.exports.AddQuiz = (req, res, next) => {
  QuizModel.insertOne(req.body, req.params, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "given ID  already exist",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.UpdateQuiz = (req, res, Updates, key) => {
  QuizModel.findOneAndUpdade(Updates, key, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 0, message: "Update is Unsuccessfull", err: err });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.GetOneQuizByID = (req, res, key) => {
  QuizModel.findOneByID(key, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "There is No Quiz with given ID",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.DeleteQuiz = (req, res, next) => {
  QuizModel.DeleteOne(req.user, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "There is No Quiz with given ID",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.DeleteQuizForAdmin = (req, res, next) => {
  QuizModel.DeleteOne(req.params, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "There is No Quiz with given ID",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

/* module.exports.LeaderBoard = (req, res, next) => {
  UserModel.findAllWithoutAdmin((err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 0, message: "Databse connection Error", err: err });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, results: result });
    }
  });
}; */
