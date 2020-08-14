const { authJwt } = require("../middleware/index");
const db = require("../models/index");
const ChatRoom = db.ChatRoom;
const User = db.User;
module.exports = function (app,io) {
  //Socket.IO
  io.on('connection', function (socket) {
      console.log('User has connected to Index');
      //ON Events
      socket.on('admin', function () {
          console.log('Successful Socket Test');
      });
      //End ON Events
  });
  const chat=io.of('/api/chat/');
  app.get('/api/chat/intiate',authJwt.verifyToken, async (req, res) => {   
    //once intiate
    console.log("ok")
    //console.log(req.userId)//already have original userId
    const secondid="opop5646"//exampleid to send from body
    //req.body(theotheruserid);//get the other user id
    const uniteuser=req.userId+secondid; // unitethem
    //User.findOne; check if the id is already a chatroom else create one
    await chat.on("connect",(socket)=>{//turn socket on
      socket.join(uniteuser, () => { //socket.join that room
        let rooms = Object.keys(socket.rooms);
        console.log(rooms); // [ <socket.id>, 'room 237' ]//then change socket room sto individual socket id                        
        res.send(rooms[0]);//grab socket id to save in db and also connect this socket
      });
    })
    res.send("joined room");//turn on socket after it is validated
  });
  app.post('/api/chat/postMessage',authJwt.verifyToken,(req,res)=>{
    //would have socket intialized so just chat.emit message on created user socket
  })
  app.get('/api/chat/getRecentMesages',authJwt.verifyToken,(req,res)=>{
    //user .findchatrroms wiht recent messages
  })
  app.get('/api/chat/getConversationByID',authJwt.verifyToken,(req,res)=>{
    //chatroom.find the id of both users combined
  })


};
/*initiate: async (req, res) => { },
postMessage: async (req, res) => { },
getRecentConversation: async (req, res) => { },
getConversationByID: async (req, res) => { },*/