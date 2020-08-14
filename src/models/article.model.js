var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  usersId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'users'
  },
  title:{
      type:String
  },
  content:{
      type:String
  },
  comments:[{
    type: mongoose.Schema.Types.ObjectId, ref: 'articlecomments'
  }]
}, {
  timestamps: true,
});

var articleCommentSchema = new Schema({
    Text:{
        type:String
    },
  }, {
    timestamps: true,
});
  
const articleComments = mongoose.model('articleComments', articleCommentSchema);
const Article = mongoose.model('Article', articleSchema);

module.exports = {
  articleComments:articleComments,
  Article:Article,
}
