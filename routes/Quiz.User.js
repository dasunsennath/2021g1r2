const express = require("express");
const Router = express.Router();
const Authetication = require("../Middlewares/Authetication");
const controller = require("../Controllers/Quiz.User.Controller");

Router.get("/:ID", Authetication.VerifyUser, (req, res, next) => {
  controller.GetAllComplete(req, res, next);
});

Router.get("/", Authetication.VerifyUser, (req, res, next) => {
  controller.GetPartialCompleteCourse(req, res, next);
});

Router.post("/:ID/:QID", Authetication.VerifyUser, (req, res, next) => {
  controller.InsertComplete(req, res, next);
});

Router.put("/:ID/:QID", Authetication.VerifyUser, (req, res, next) => {
  controller.UpdateComplete(req, res, next);
});

Router.delete("/:ID/", Authetication.VerifyUser, (req, res, next) => {
  controller.DeleteComplete(req, res, next);
});

module.exports = Router;
