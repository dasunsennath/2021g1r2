const UserModel = require("../Models/Users.Model");

module.exports.GetAllUser = (req, res, next) => {
  UserModel.findAll((err, result) => {
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

module.exports.AddUser = (req, res, next) => {
  UserModel.insertOne(req.body, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "given Email address already exist",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.GetOneUserBYID = (req, res,User) => {
  UserModel.findOneByID(User, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: " There is no user!",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.UpdateUser = (req, res, Updates, key) => {
  UserModel.findOneAndUpdade(Updates, key, (err, result) => {
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

module.exports.UpdateImage = (req, res, Update, key) => {
  UserModel.updateImage(Update, key, (err, result) => {
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
module.exports.GetOneUseByID = (req, res, key) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ success: 1, result: key });
};

module.exports.DeleteUser = (req, res, next) => {
  UserModel.deleteOne(req.user, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "There is No User with given ID",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.DeleteUserForAdmin = (req, res, next) => {
  UserModel.deleteOne(req.params, (err, result) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "There is No User with given ID",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, result: result });
    }
  });
};

module.exports.UpdateScore = (req, res, next) => {
  UserModel.updateScore(req.user, req.body, (err, result) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: 0,
        message: "Score Update Fail!",
        err: err,
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: 1, results: result });
    }
  });
};
module.exports.LeaderBoard = (req, res, next) => {
  UserModel.findAllWithoutAdmin((err, result) => {
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
