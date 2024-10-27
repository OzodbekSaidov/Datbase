/** @format */

import mongoose from 'mongoose';
import config from "../utils/config/config.js"
export async function db() {
    console.log(config.db.database);
    return mongoose
        // .connect(`mongodb+srv://${config.db.username}:${config.db.password}@cluster0.9dygz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster/${config.db.database}`, {
        .connect(`mongodb://localhost:27017/${config.db.database}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((res) => console.log('DB connected succesfully'))
        .catch((err) => console.log('Error connecting'));
}
// LZoPldAfnZVMBUJC