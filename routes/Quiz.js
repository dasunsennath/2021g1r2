const express = require("express");
const QuizController = require("../Controllers/Quiz.Controller");
const authentication = require("../Middlewares/Authetication");

const Router = express.Router();

Router.get("/", authentication.VerifyUser, (req, res, next) => {
  QuizController.GetallQuiz(req, res, next);
});

Router.post(
  "/",
  authentication.VerifyUser,
  authentication.VerifyAdmin,
  (req, res, next) => {
    QuizController.AddQuiz(req, res, next);
  }
);

Router.put("/:ID", (req, res, next) => {
  QuizController.UpdateQuiz(req, res, req.body, req.params);
});

Router.get("/:ID", authentication.VerifyUser, (req, res, next) => {
  QuizController.GetOneQuizByID(req, res, req.params);
});

Router.delete(
  "/:ID",
  authentication.VerifyUser,
  authentication.VerifyAdmin,
  (req, res, next) => {
    QuizController.DeleteQuizForAdmin(req, res, req.params);
  }
);

module.exports = Router;
