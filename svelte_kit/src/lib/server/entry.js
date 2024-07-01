import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema({
    userid:{
        type:ObjectId,
        required:true,
    },
    title: {
        type:String,
        required:true
    },
    url: {
        type:String
    },
    username: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    folders:{
        type:[String],
        required:true
    }
});

export default mongoose.model('entry', EntrySchema) // name is users