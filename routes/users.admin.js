var express = require("express");
const UserController = require("../Controllers/User.Controller");
const UPloadImage = require("../Middlewares/UploadImage");
const ConfigPassANdImage = require("../Configure/Password&ImageConfig");
const Authenticate = require("../Middlewares/Authetication");

const router = express.Router();

router.get(
  "/alluser",
  Authenticate.VerifyUser,
  Authenticate.VerifyAdmin,
  (req, res, next) => {
    UserController.GetAllUser(req, res, next);
  }
);

router.get(
  "/oneuser",
  Authenticate.VerifyUser,
  Authenticate.VerifyAdmin,
  (req, res, next) => {
    UserController.GetOneUserBYEmail(req, res, req.body);
  }
);

router.put(
  "/Image/:ID",
  Authenticate.VerifyUser,
  Authenticate.VerifyAdmin,
  UPloadImage.single("image"),
  (req, res, next) => {
    req = ConfigPassANdImage.ConfigImage(req);
    UserController.UpdateImage(req, res, req.body, req.params);
  }
);

router.put(
  "/profile/:ID",
  Authenticate.VerifyUser,
  Authenticate.VerifyAdmin,
  (req, res, next) => {
    UserController.UpdateUser(req, res, req.body, req.params);
  }
);

router.delete(
  "/profile/:ID",
  Authenticate.VerifyUser,
  Authenticate.VerifyAdmin,
  (req, res, next) => {
    UserController.DeleteUserForAdmin(req, res, next);
  }
);

module.exports = router;
