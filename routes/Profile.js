var express = require("express");
const UserController = require("../Controllers/User.Controller");
const UPloadImage = require("../Middlewares/UploadImage");
const configPassANdImage = require("../Configure/Password&ImageConfig");
const authenticate = require("../Middlewares/Authetication");
const Router = require("./Course_User");

const router = express.Router();
router
  .route("/")
  .get(authenticate.VerifyUser, (req, res, next) => {
    UserController.GetOneUseByID(req, res, req.user);
  })

  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      `System Not allow to have POST methon on Profile${req.url} EndPoint`
    );
  })

  .put(authenticate.VerifyUser, (req, res, next) => {
    req = configPassANdImage.ConfigPassword(req);
    UserController.UpdateUser(req, res, req.body, req.user);
  })

  .delete(authenticate.VerifyUser, (req, res, next) => {
    UserController.DeleteUser(req, res, next);
  });

router.put(
  "/UpdateImage",
  authenticate.VerifyUser,
  UPloadImage.single("image"),
  (req, res, next) => {
    req = configPassANdImage.ConfigImage(req);
    UserController.UpdateImage(req, res, req.body, req.user);
  }
);

router.put("/score", authenticate.VerifyUser, (req, res, next) => {
  UserController.UpdateScore(req, res, next);
});

module.exports = router;
