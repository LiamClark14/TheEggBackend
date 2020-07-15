var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chapterSchema = new Schema({
  chapterName: {
    type: String,
    required: true
  },
  numLessons: {
    type: int,
    required: true
  },
  minutes: {
    type: int,
    required: true
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Chapter', chapterSchema);