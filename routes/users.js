var express = require("express");
const UserController = require("../Controllers/User.Controller");
const UPloadImage = require("../Middlewares/UploadImage");
const configPassANdImage = require("../Configure/Password&ImageConfig");
const authenticate = require("../Middlewares/Authetication");

var router = express.Router();

/* GET users listing. */
// router.get('/',authenticate.VerifyUser,authenticate.VerifyAdmin,(req, res, next)=>{

//  UserController.GetAllUser(req,res,next);
// });

router.get("/leaderBoard", authenticate.VerifyUser, (req, res, next) => {
  UserController.LeaderBoard(req, res, next);
});

router.post("/SignUp", UPloadImage.single("image"), (req, res, next) => {
  console.log("content ", req.body);
  req = configPassANdImage.ConfigImage(req);
  req = configPassANdImage.ConfigPassword(req);
  UserController.AddUser(req, res, next);
});

router.post("/login", authenticate.authenticate, (req, res, next) => {
  var token = authenticate.getToken({ id: req.user.ID });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ success: 1, token: token, status: "Login Successful!" });
});
module.exports = router;
