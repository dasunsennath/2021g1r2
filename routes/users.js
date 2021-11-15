var express = require("express");
const UserController = require("../Controllers/User.Controller");
const UPloadImage = require("../Middlewares/UploadImage");
const ConfigPassANdImage = require("../Configure/Password&ImageConfig");
const Authenticate = require("../Middlewares/Authetication");

var router = express.Router();

/* GET users listing. */
// router.get('/',authenticate.VerifyUser,authenticate.VerifyAdmin,(req, res, next)=>{

//  UserController.GetAllUser(req,res,next);
// });

router.get("/leaderBoard", Authenticate.VerifyUser, (req, res, next) => {
  UserController.LeaderBoard(req, res, next);
});

router.post("/signUp", UPloadImage.single("image"), (req, res, next) => {
  console.log("content ", req.body);
  req = ConfigPassANdImage.ConfigImage(req);
  req = ConfigPassANdImage.ConfigPassword(req);
  UserController.AddUser(req, res, next);
});

router.post("/login", Authenticate.authenticate, (req, res, next) => {
  var token = Authenticate.getToken({ id: req.user.ID });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ success: 1, token: token, status: "Login Successful!" });
});
module.exports = router;
