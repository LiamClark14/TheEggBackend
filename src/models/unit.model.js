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
      type: mongoose.Schema.Types.ObjectId, ref: 'LessonComments'
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
    type: Number,
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


const Unit = mongoose.model('Unit', unitSchema);
const Chapter=mongoose.model('Chapter', chapterSchema);
const Lesson = mongoose.model('Lesson', chapterSchema);

module.exports = {
  Unit:Unit,
  Chapter:Chapter,
  Lesson:Lesson,
}


