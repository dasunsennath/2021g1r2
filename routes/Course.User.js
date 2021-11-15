const express = require("express");
const Router = express.Router();
const Authetication = require("../Middlewares/Authetication");
const Controller = require("../Controllers/Course.User.Controller");

Router.get("/", Authetication.VerifyUser, (req, res, next) => {
  Controller.GetAllComplete(req, res, next);
});

Router.post("/:ID", Authetication.VerifyUser, (req, res, next) => {
  Controller.InsertComplete(req, res, next);
});

module.exports = Router;
