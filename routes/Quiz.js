const express = require("express");
const QuizController = require("../Controllers/Quiz.Controller");
const Authentication = require("../Middlewares/Authetication");

const Router = express.Router();

//get all questions from specific course
Router.get("/:ID", Authentication.VerifyUser, (req, res, next) => {
  QuizController.GetallQuiz(req, res, next);
});

//Add question to specific course
// these tasks can done by the Admin
Router.post(
  "/:ID",
  Authentication.VerifyUser,
  Authentication.VerifyAdmin,
  (req, res, next) => {
    QuizController.AddQuiz(req, res, next);
  }
);

//Update question in specific course
// these tasks can done by the Admin
Router.put("/:ID/:quizID",  Authentication.VerifyUser,
Authentication.VerifyAdmin, (req, res, next) => {
  QuizController.UpdateQuiz(req, res, req.body, req.params);
});

//get one question from specific course
Router.get("/:ID/:quizID", Authentication.VerifyUser, (req, res, next) => {
  QuizController.GetOneQuizByID(req, res, req.params);
});

//delete questions from specific course
// these tasks can done by the Admin
Router.delete(
  "/:ID/:quizID",
  Authentication.VerifyUser,
  Authentication.VerifyAdmin,
  (req, res, next) => {
    QuizController.DeleteQuizForAdmin(req, res, req.params);
  }
);

module.exports = Router;
