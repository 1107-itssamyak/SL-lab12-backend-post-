//import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const LibrarySchema = new Schema({
    bookName: String,
    nameofIssuer: String,
    dueDate: String
});

module.exports = mongoose.model("firstmongoose", LibrarySchema, "SL-Lab-12")