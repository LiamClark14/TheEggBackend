var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ChatRoomSchema = new Schema({
  usersId:{
      type:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'users'
      }]
  },
  messages:[{
    type: mongoose.Schema.Types.ObjectId, ref: 'message'
  }]
}, {
  timestamps: true,
});

const ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);

module.exports = ChatRoom;