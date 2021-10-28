const express = require("express");
const CourseController = require("../Controllers/Course.Controller");
const imageUpload = require("../Middlewares/UploadImage");
const Config = require("../Configure/Password&ImageConfig");
const Authentication = require("../Middlewares/Authetication");

const Router = express.Router();

Router.get("/", Authentication.VerifyUser, (req, res, next) => {
  CourseController.GetAllCourse(req, res, next);
});

Router.post(
  "/",
  Authentication.VerifyUser,
  Authentication.VerifyAdmin,
  imageUpload.single("image"),
  (req, res, next) => {
    req = Config.ConfigImage(req);
    CourseController.AddCourse(req, res, next);
  }
);

Router.put("/:ID", imageUpload.single("image"), (req, res, next) => {
  req = Config.ConfigImage(req);
  CourseController.UpdateCourse(req, res, req.body, req.params);
});

Router.get("/:ID", Authentication.VerifyUser, (req, res, next) => {
  CourseController.GetOneCourseByID(req, res, req.params);
});

Router.delete(
  "/:ID",
  Authentication.VerifyUser,
  Authentication.VerifyAdmin,
  (req, res, next) => {
    CourseController.DeleteCourseForAdmin(req, res, req.params);
  }
);
module.exports = Router;
