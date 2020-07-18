const express = require('express')
const { authJwt } = require("../middleware/index");
const controller = require("../controller/user.controller");

const units =require("../controller/units.controller")

const usersRouter = express.Router()

usersRouter.all(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
})

usersRouter.get('/all',controller.allAccess)
usersRouter.get("/user", authJwt.verifyToken, controller.userBoard);
//usersRouter.get("/mod",authJwt.verifyToken, authJwt.isModerator,controller.moderatorBoard);
//usersRouter.get("/admin",authJwt.verifyToken, authJwt.isAdmin,controller.adminBoard);









module.exports = usersRouter;



