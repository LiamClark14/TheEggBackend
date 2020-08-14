const express = require('express')
const { authJwt } = require("../middleware/index");
const controller = require("../controller/articles.controller");

const articlesRouter = express.Router()

articlesRouter.all(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
})

articlesRouter.get('/:id',controller.getArticle)
articlesRouter.post("/",authJwt.verifyToken, controller.postArticle);
articlesRouter.put("/:id")

module.exports = articlesRouter;
