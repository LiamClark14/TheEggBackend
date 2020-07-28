const dbConfig = require("./config/db.config")
const db = require("./models/index");
const Unit = db.unit;
//const Lesson =db.lesson;
var unitsData = [
  {
     unitName:"Unit 1",
      numChapters:10,
      minutes:0,
      chapters:[
        {   
            chapterName:"chapter 1",
            lesson:[{}]
        },
        {       
            chapterName:"chapter 2",
            lesson:[{}]
        },
        {
            chapterName:"chapter 3",
            lesson:[{}]
        },
    ]
  } 
];
var lessonData=[
  {
  lessonName:"lesson 1",
  minutes:0,
  videoURL:"yout",
  comments:[],
  resources:[],
},
{
  lessonName:"lesson 3",
  minutes:0,
  videoURL:"yout",
  comments:[],
  resources:[],
},
]
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    //seedUnits();
    //seedLessons("5f15cba793b904518856b11f","5f15cba793b904518856b120",lessonData)// a pecific unit to chapter;
    //dropUnit();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
function seedUnits(){
  Unit.createCollection().then(function(collection) {
    console.log('Collection is created!');
  }); 
  Unit.insertMany(unitsData,function(err,doc){
    if(err){
      return console.log(err);
    }
  })
}
async function seedLessons(unitID,chapterID,lessonDataforchap){
  const unit = await Unit.findOne({_id:unitID},function(err,unit){
    let chapToPush=unit.chapters.find(chap=>chap._id==chapterID);
    console.log(chapToPush.lessons)
     lessonData.forEach(lesson=>{
           chapToPush.lessons.push(lesson);
           console.log(chapToPush.lessons);
    })
    unit.save(); 
  })
   Unit.findOne({_id:unitID},function(err,unit){
    let chapToPush=unit.chapters.find(chap=>chap._id==chapterID);
    console.log("ok")
    console.log(chapToPush.lessons)
    console.log("ok2")
  })//check if its save
}

function dropUnit(){
  Unit.collection.drop();
  console.log("Collection dropped")
}




