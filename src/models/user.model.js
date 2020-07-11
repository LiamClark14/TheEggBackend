var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password: {
    type: String,
    required: true
  },
  feedBack:{
    type:String,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
},{
  timestamps: true,
});

const User = mongoose.model('user', UserSchema);

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