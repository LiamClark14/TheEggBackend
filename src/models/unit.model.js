var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chapterSchema = new Schema({
  chapterName: {
    type: String,
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
var unitSchema = new Schema({
  unitName: {
    type: String,
    required: true
  },
  numChapters: {
    type: Number ,
    required: true
  },
  minutes: {
    type: Number,
    required: true
  },
  chapters: [chapterSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Unit', unitSchema);



