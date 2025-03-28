const express=require("express");
const {explore,crafts,addProject,updateLike}=require("../controllers/projectController");

const projectRouter=express.Router();

projectRouter.get("/explore",explore);
projectRouter.get("/crafts",crafts);
projectRouter.post("/new",addProject);
projectRouter.patch("/crafts/:id",updateLike);

module.exports=projectRouter;