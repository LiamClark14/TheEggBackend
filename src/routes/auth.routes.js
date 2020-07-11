const express = require('express');
const { verifySignUp } = require("../middleware/index");
const controller = require("../controller/auth.controller");

const authRouter = express.Router()


authRouter.all(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

authRouter.post("/signup",verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted,controller.signup);

authRouter.post("/signin", controller.signin);


module.exports = authRouter
