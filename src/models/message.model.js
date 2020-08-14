var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = new Schema({
  Text:{
      type:String
  },
}, {
  timestamps: true,
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;