import mongoose from 'mongoose';
import Units from './seeders/users.seeder';
import Chapter from './seeders/posts.seeder';
import Lesson from './seeders/comments.seeder';
const dbConfig = require("./src/config/db.config")

const mongoURL = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}` || 'mongodb://localhost:27017/theEgg';

export const seedersList = {
    Units,
    Chapter,
    Lesson,
};

export const connect = async () => await mongoose.connect(mongoURL, { useNewUrlParser: true });

export const dropdb = async () => mongoose.connection.db.dropDatabase();