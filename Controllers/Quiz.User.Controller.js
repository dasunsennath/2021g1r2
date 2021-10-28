const QuizUserModel = require("../Models/Quiz.User.Model");

module.exports.GetAllComplete = (req, res, next) => {
  QuizUserModel.getAll(req.user, req.params, (err, result) => {
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

module.exports.InsertComplete = (req, res, next) => {
  QuizUserModel.insert(req.user, req.params, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "Insertion Fail!",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, results: result });
    }
  });
};

module.exports.GetPartialCompleteCourse = (req, res, next) => {
  QuizUserModel.getCompleteCourse(req.user, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "Insertion Fail!",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, results: result });
    }
  });
};

module.exports.UpdateComplete = (req, res, next) => {
  QuizUserModel.update(req.user, req.params, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "Update Fail!",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, results: result });
    }
  });
};

module.exports.DeleteComplete = (req, res, next) => {
  QuizUserModel.delete(req.user, req.params, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "Delete Fail!",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, results: result });
    }
  });
};
