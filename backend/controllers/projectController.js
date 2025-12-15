const projectModel = require("../models/Projects");
const UserModel=require("../models/User");

const explore = async (req, res) => {
  try {
    const projects = await projectModel.find().limit(9);
    res.status(200).json({ projects: projects });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Failed to Fetch Data from Database" });
  }
};
const crafts=async(req,res)=>{
  try {
    const projects = await projectModel.find();
    res.status(200).json({ projects: projects });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Failed to Fetch Data from Database" });
  }

}
const addProject=async(req,res)=>{
  const {name,image,description,steps,materials,time,difficultyLevel,category,userId}=req.body;
  console.log(userId);
  try{
    const newProject= new projectModel({name,image,description,steps,materials,time,difficultyLevel,category,user:userId});
    await newProject.save();
    res.status(201).json({message:"Project Saved Successfully"});
  }catch(err){
    console.log(err);
    res.status(500).json({message:"Failed Saving the project"});
  }
}
const updateLike=async(req,res)=>{
  console.log("updatelike function is called");
  const {id}=req.params;
  try{
    const product= await projectModel.findByIdAndUpdate({_id:id});
    product.likes=product.likes+1;
    await product.save();
    res.status(200).json({message:"Like increased successfully"});
  }catch(err){
    console.log(err);
    res.status(404).json({message:"Couldn't find product"});
  }
}
const myProjects=async(req,res)=>{
  const userId=req.query.userId;
   try {
    const myProjects = await projectModel.find({user:userId});
    res.status(200).json({ myProjects: myProjects });
    console.log(myProjects);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Failed to Fetch Data from Database" });
  }
}
const deleteProject=async(req,res)=>{
  const projectId=req.query.projectId;
  try{
    await projectModel.deleteOne({_id:projectId});
    res.status(200).json({message:"Project Deleted successfully!"});
  }catch(err){
    console.log("Project Not deleted! ",err);
  }
}
module.exports={explore,crafts,addProject,updateLike,myProjects,deleteProject};
