const { authJwt } = require("../middleware/index");
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
  const chat=io.of('/api/chat/none');
  app.post('/api/chat/intiate',authJwt.verifyToken, (req, res) => {   
    console.log("ok")
    //console.log(req.userId)
    res.send("ok");
    //console.log(chat);
    chat.on("connect",(socket)=>{
      console.log('connected');
    })
  });
  app.post('/api/chat/postMessage',authJwt.verifyToken,(req,res)=>{

  })
  app.get('/api/chat/getRecentMesages',authJwt.verifyToken,(req,res)=>{
    
  })
  app.get('/api/chat/getConversationByID',authJwt.verifyToken,(req,res)=>{
    
  })


};
/*initiate: async (req, res) => { },
postMessage: async (req, res) => { },
getRecentConversation: async (req, res) => { },
getConversationByID: async (req, res) => { },*/