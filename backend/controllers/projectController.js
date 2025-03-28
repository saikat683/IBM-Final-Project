const projectModel = require("../models/Projects");

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
  const {name,image,description,steps,materials,time,difficultyLevel,category}=req.body;
  try{
    const newProject= new projectModel({name,image,description,steps,materials,time,difficultyLevel,category});
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
module.exports={explore,crafts,addProject,updateLike};
