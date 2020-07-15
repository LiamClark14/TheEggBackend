const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.unit = require("./unit.model");
db.chapter = require("./chapter.model");
db.lesson = require("./lesson.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;