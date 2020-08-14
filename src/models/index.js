const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.unit = require("./unit.model");
db.chatRoom=require('./chatRoom.model');
db.message=require('./message.model');
db.Article=require('./article.model')

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;