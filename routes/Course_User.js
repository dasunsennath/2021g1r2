const express = require("express");
const Router = express.Router();
const Authetication = require("../Middlewares/Authetication");
const controller = require("../Controllers/Course.User.Controller");

Router.get("/", Authetication.VerifyUser, (req, res, next) => {
  controller.GetAllComplete(req, res, next);
});

Router.post("/:ID", Authetication.VerifyUser, (req, res, next) => {
  controller.InsertComplete(req, res, next);
});

module.exports = Router;
