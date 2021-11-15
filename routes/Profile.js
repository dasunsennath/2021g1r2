var express = require("express");
const UserController = require("../Controllers/User.Controller");
const UPloadImage = require("../Middlewares/UploadImage");
const ConfigPassANdImage = require("../Configure/Password&ImageConfig");
const Authenticate = require("../Middlewares/Authetication");


const router = express.Router();
router
  .route("/")
  .get(Authenticate.VerifyUser, (req, res, next) => {
    UserController.GetOneUseByID(req, res, req.user);
  })

  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      `System Not allow to have POST methon on Profile${req.url} EndPoint`
    );
  })

  .put(Authenticate.VerifyUser, (req, res, next) => {
    req = ConfigPassANdImage.ConfigPassword(req);
    UserController.UpdateUser(req, res, req.body, req.user);
  })

  .delete(Authenticate.VerifyUser, (req, res, next) => {
    UserController.DeleteUser(req, res, next);
  });

router.put(
  "/updateImage",
  Authenticate.VerifyUser,
  UPloadImage.single("image"),
  (req, res, next) => {
    req = ConfigPassANdImage.ConfigImage(req);
    UserController.UpdateImage(req, res, req.body, req.user);
  }
);

router.put("/score", Authenticate.VerifyUser, (req, res, next) => {
  UserController.UpdateScore(req, res, next);
});

module.exports = router;
