var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var unitSchema = new Schema({
  unitName: {
    type: String,
    required: true
  },
  numChapters: {
    type: int,
    required: true
  },
  minutes: {
    type: int,
    required: true
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'Chapter'
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Unit', unitSchema);



