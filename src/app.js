require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config') //node env from production or development
const bodyParser = require("body-parser");
const app = express();
const authRouter = require('./routes/auth.routes');
const usersRouter = require('./routes/user.routes');
const morganOption = NODE_ENV === 'production'
  ? 'tiny'
  : 'common';
const db = require("./models/index");
const dbConfig = require("./config/db.config")


//db
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });




//app using all set variables
app.use(morgan(morganOption));//HTTP request logger middleware for node.js
app.use(cors()); // cross orrigin 
app.use(helmet());//Helmet helps you secure your Express apps by setting various HTTP headers. 
app.use(bodyParser.json());

//Routes
app.use('/api/test', usersRouter);
app.use('/api/auth', authRouter);

//error handler
app.use(function errorHandler(error, req, res, next) {
  let response
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
  } else {
    console.error(error)
    response = { message: error.message, error }
  }
  res.status(500).json(response)
})

//first instance of db
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}



module.exports = app;