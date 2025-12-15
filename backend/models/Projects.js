const mongoose=require("mongoose");
const Schema=mongoose.Schema;
// const User=require("User");

const listingSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    difficultyLevel:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true,
    },
    materials:{
        type:String,
        required:true
    },
    steps:{
        type:String,
        required:true,
    },
    likes:{
        type:Number,
        default:0,
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
    }
}); 
const Projects=mongoose.model("Listing",listingSchema);
module.exports=Projects;