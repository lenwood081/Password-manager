import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    // TODO: incorperate a username into the auth scripts for website personalization
    /*username:{
        type:String,
        required:true
    },*/
    folders:{
        type:[String],
        required:true
    }
});

export default mongoose.model('user', UserSchema) // name is users