var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  feedBack: {
    type: String,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ],
  progress:{
    type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'
  },
  ChatRooms:[{
    type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom'
  }]
}, {
  timestamps: true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
/*education: {
    type: educations,
    required: true
  }
  state: {
    type: String
  },
  city: {
    type: String
  },
  pastExperiences:{
    type: String
  } ,
  skills: {
    type: Array
  }
*/