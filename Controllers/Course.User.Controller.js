const CourseUserModel = require("../Models/Course.User.Model");

module.exports.GetAllComplete = (req, res, next) => {
  CourseUserModel.getAll(req.user,(err, result) => {
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
  CourseUserModel.insert(req.user, req.params, (err, result) => {
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
