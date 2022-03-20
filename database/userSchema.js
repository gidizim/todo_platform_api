const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoItem = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    dueDate: {type: Date},
});

const user = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    todoItems: [todoItem]
});

module.exports = mongoose.model("Users", user);


// const todoItem = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     complete: {
//         type: Boolean,
//         required: true,
//     },
//     dueDate: {
//         type: Date,
//         required: true,
//     },
// });

// const user = new Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         lowercase: true,
//     },
//     password: {
//         type: String,
//         required: true,
//         min: 8,
//     },
//     loggedIn: {
//         type: Boolean,
//         default: true,
//     },
//     createdAt: {
//         type: Date,
//         immutable: true,
//         default: () => Date.now(),
//     },
//     todoItems: [todoItem]
// });



// const schedule = new Schema({
//     userId: {
//         required: true,
//     },
//     todoId: {
//         required: true,
//     },
//     data: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         immutable: true,
//         default: () => Date.now(),
//     },
//     todoItems: [todoItem]
// });
// module.exports = mongoose.model("Schedule", schedule);