import { Seeder } from 'mongoose-data-seed';
let Unit = require('../src/models/unit.model')
let Lesson = require('../src/models/lesson.model')




const data = [
    {
        _id:1,
        unitName:"Unit 1",
        numChapters:10,
        minutes:0,
        chapters:[
            {
                _id:1,
                chapterName:"chapter 1",
                lesson:[{}]
            },
            {
                _id:2,
                chapterName:"chapter 2",
                lesson:[{}]
            },
            {
                _id:3,
                chapterName:"chapter 3",
                lesson:[{}]
            },
        ]
    }
]

class UnitsSeeder extends Seeder {
    async shouldRun() {
      return Unit.countDocuments()
        .exec()
        .then(count => count === 0);
    }
  
    async run() {
      return Unit.create(data);
    }
   
  }
  
  export default UnitsSeeder;

