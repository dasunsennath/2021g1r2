const CourseModel = require("../Models/Course.Model");

module.exports.GetAllCourse = (req, res, next) => {
  CourseModel.findAll((err, result) => {
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
};

module.exports.AddCourse = (req, res, next) => {
  console.log("course body", req.body);
  CourseModel.insertOne(req.body, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "given Course name already exist",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.UpdateCourse = (req, res, Updates, key) => {
  CourseModel.findOneAndUpdate(Updates, key, (err, result) => {
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

module.exports.GetOneCourseByID = (req, res, key) => {
  CourseModel.findOneByID(key, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "There is No Course with given ID",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.DeleteCourse = (req, res, next) => {
  CourseModel.DeleteOne(req.course, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "There is No Course with given ID",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.DeleteCourseForAdmin = (req, res, next) => {
  CourseModel.DeleteOne(req.params, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "There is No Course with given ID",
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
  CourseModel.findAllWithoutAdmin((err, result) => {
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
