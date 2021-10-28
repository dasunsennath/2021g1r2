const express = require("express");
const Router = express.Router();
const Authetication = require("../Middlewares/Authetication");
const Controller = require("../Controllers/Quiz.User.Controller");

Router.get("/:ID", Authetication.VerifyUser, (req, res, next) => {
  Controller.GetAllComplete(req, res, next);
});

Router.get("/", Authetication.VerifyUser, (req, res, next) => {
  Controller.GetPartialCompleteCourse(req, res, next);
});

Router.post("/:ID/:QID", Authetication.VerifyUser, (req, res, next) => {
  Controller.InsertComplete(req, res, next);
});

Router.put("/:ID/:QID", Authetication.VerifyUser, (req, res, next) => {
  Controller.UpdateComplete(req, res, next);
});

Router.delete("/:ID/", Authetication.VerifyUser, (req, res, next) => {
  Controller.DeleteComplete(req, res, next);
});

module.exports = Router;
