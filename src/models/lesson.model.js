var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
  lessonName: {
    type: String,
    required: true
  },
  minutes: {
    type: Number,
    required: true
  },
  videoURL: {
    type: String,
    required: true
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'Comments'
    }
  ],
  resources: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'Resource'
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Lesson', lessonSchema);