const express = require("express");
const Router = express.Router();
const Authetication = require("../Middlewares/Authetication");
const Controller = require("../Controllers/Quiz.User.Controller");

//get all complete questions in the course
Router.get("/:ID", Authetication.VerifyUser, (req, res, next) => {
  Controller.GetAllComplete(req, res, next);
});

//get partialy complete course
Router.get("/", Authetication.VerifyUser, (req, res, next) => {
  Controller.GetPartialCompleteCourse(req, res, next);
});
// insert partialy complete question course
Router.post("/:ID/:QID", Authetication.VerifyUser, (req, res, next) => {
  Controller.InsertComplete(req, res, next);
});

// Update partialy complete question course
Router.put("/:ID/:QID", Authetication.VerifyUser, (req, res, next) => {
  Controller.UpdateComplete(req, res, next);
});

// Delete partialy complete question course
Router.delete("/:ID", Authetication.VerifyUser, (req, res, next) => {
  Controller.DeleteComplete(req, res, next);
});

module.exports = Router;
