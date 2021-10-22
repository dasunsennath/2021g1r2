const express = require("express");
const CourseController = require("../Controllers/Course.Controller");
const imageUpload = require("../Middlewares/UploadImage");
const config = require("../Configure/Password&ImageConfig");
const authentication = require("../Middlewares/Authetication");

const Router = express.Router();

Router.get("/", authentication.VerifyUser, (req, res, next) => {
  CourseController.GetAllCourse(req, res, next);
});

Router.post(
  "/",
  authentication.VerifyUser,
  authentication.VerifyAdmin,
  imageUpload.single("image"),
  (req, res, next) => {
    req = config.ConfigImage(req);
    CourseController.AddCourse(req, res, next);
  }
);

Router.put("/:ID", imageUpload.single("image"), (req, res, next) => {
  req = config.ConfigImage(req);
  CourseController.UpdateCourse(req, res, req.body, req.params);
});

Router.get("/:ID", authentication.VerifyUser, (req, res, next) => {
  CourseController.GetOneCourseByID(req, res, req.params);
});

Router.delete(
  "/:ID",
  authentication.VerifyUser,
  authentication.VerifyAdmin,
  (req, res, next) => {
    CourseController.DeleteCourseForAdmin(req, res, req.params);
  }
);
module.exports = Router;
