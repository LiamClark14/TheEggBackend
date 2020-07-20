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

var chapterSchema = new Schema({
  chapterName: {
    type: String,
    required: true
  },
  lessons: [lessonSchema]
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



