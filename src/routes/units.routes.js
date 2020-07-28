const express = require('express');
const { verifySignUp } = require("../middleware/index");
const controller = require("../controller/units.controller");


const unitsRouter = express.Router()


unitsRouter.get('/',controller.allUnits);



module.exports = unitsRouter;