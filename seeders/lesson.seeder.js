import { Seeder } from 'mongoose-data-seed';
let Lesson = require('../src/models/lesson.model')
let Unit = require('../src/models/unit.model')
const Lessondata = [
    {
        unit:1,
        Chp:1,
        lessonName:"lesson 1 for 1/1",
        minutes:0,
        videoURL:"video 1",
        comments:[{}],
        resources:[{}]
    },
    {
        unit:1,
        Chp:1,
        lessonName:"lesson 2 for 1/2",
        minutes:0,
        videoURL:"video 2",
        comments:[{}],
        resources:[{}]
    },
    /*{
        unit:1,
        Chp:2,
        lessonName:"lesson 1 for 2/1",
        minutes:0,
        videoURL:"video 3",
        comments:[{}],
        resources:[{}]
    },
    {
        unit:1,
        Chp:2,
        lessonName:"lesson 2 for 2/2",
        minutes:0,
        videoURL:"video 4",
        comments:[{}],
        resources:[{}]
    },
    {
        unit:1,
        Chp:3,
        lessonName:"lesson 3 for 3/1",
        minutes:0,
        videoURL:"video 5",
        comments:[{}],
        resources:[{}]
    },
    {
        unit:1,
        Chp:3,
        lessonName:"lesson 3 for 3/2",
        minutes:0,
        videoURL:"video 6",
        comments:[{}],
        resources:[{}]
    },*/
]

class LessonSeeder extends Seeder {
    async beforeRun() {
        this.units = await Unit.find({}).exec();
        this.lessonData = this._generateLessons();
    }
    async shouldRun() {
      return Lesson.countDocuments()
        .exec()
        .then(count => count === 0);
    }
  
    async run() {
      return this._generateLessons();
    }
    _generateLessons() {
        return Lessondata.forEach(lesson=>{
            let unit = Unit.findOne({_id:lesson.unit});
            unit.chapters.forEach(chp=>{
                let toAddChap = chap.findOne({_id:lesson.Chp})
                let theLessonAdded={
                    lessonName:lesson.lessonName,
                    minutes:lesson.minutes,
                    videoURL:lesson.videoURL,
                    comments:[{}],
                    resources:[{}]
                }
                toAddChap.push({theLessonAdded})
                toAddChap.save()
            }) 
        })
    }
  }

  
  export default LessonSeeder;