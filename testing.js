
//
// const UserSchema = require('/database/userSchema');
// const data = {
//     "firstName": "gid",
//     "lastName": "value2",
//     "email": "value3",
//     "password": "value4",
//     "todoItems": [
//         {
//             "name": "Test1",
//             "description": "Test2",
//             "_id": "61fdf4c7bca5b2878bec6751"
//         },
//         {
//             "name": "Watch Tv",
//             "description": "Finish friends!",
//             "dueDate": "2022-05-05T00:00:00.000Z",
//             "_id": "61fdf6d5c72bef04c1ad75ad"
//         },
//         {
//             "name": "Watch Tv",
//             "description": "Finish friends!",
//             "dueDate": "2022-05-05T00:00:00.000Z",
//             "_id": "61fdf6f1c72bef04c1ad75b0"
//         }
//     ],
//     "__v": 0
// }


const Mongoose = require('mongoose');
const uri = "mongodb+srv://admin:%3FPBfZ%237yt%3B%22EnNX%2A@tododb.g7dda.mongodb.net/TodoDB?retryWrites=true&w=majority";
require('dotenv').config();

async function main() {
    try {
        Mongoose.connect(process.env.MONGO_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        Mongoose.set('debug', true);
        const cachedDb = Mongoose.connection;
        cachedDb.on("error", function (err) {
            console.log('DB connection failed with error:', err);
        });
        cachedDb.once("open", function () {
            console.log('DB connected');
        });
        return cachedDb;
    } catch (e) {
        console.log("Error: Connection to DB Failed");
    }

}


if (require.main === module) {
    main();
}