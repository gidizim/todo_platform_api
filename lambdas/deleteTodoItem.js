'use strict';

const Responses = require('./API_Responses');
const {connectToDatabase} = require('database/establishConnection');
const UserSchema = require('database/userSchema');
require('dotenv').config();

exports.handler = async event => {
    try {
        await connectToDatabase();
        let result = await UserSchema.updateOne(
            { _id: event.pathParameters.user_id },
            { $pull: { 'todoItems': { _id: event.pathParameters.todo_id } } }
        );
        return Responses._200({message: result});
    } catch (e) {
        return Responses._400({message: "getTodoItem: Failed" + e});
    }
}