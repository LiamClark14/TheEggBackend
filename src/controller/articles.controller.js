const db = require("../models/index");
const User = db.user;
const {Article} = db.Article;
const{articleComments}=require("../models/article.model");

exports.postArticle = (req, res) => {
    console.log(req.userId);
    //find user just in case
    /*User.findOne({_id:req.userId}).exec((err,user)=>{
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        res.status(200).send({
            id: user._id,
            firstname: user.firstName,
            lastname:user.lastName,
            email: user.email
        });
    })*/
    const article= new Article({
        userId:req.userId,
        title:req.body.title,
        content:req.body.content,
        comments:[],
    })
    article.save((err,article)=>{
        if(err){
            res.status(500).send({message:err})
            return
        }
        res.send(article.id);
    });
};

exports.getArticle = (req, res) => {
    searchid=req.params.id;    
    Article.findOne({_id:searchid}).exec((err,article)=>{
        if (!article) {
            return res.status(404).send({ message: "User Not found." });
        }
        res.status(200).send({
            id: article._id,
            title: article.title,
            content:article.content,
            comments: article.comments
        });
    })
};