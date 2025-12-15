const express=require("express");
const {explore,crafts,addProject,updateLike,myProjects,deleteProject}=require("../controllers/projectController");

const projectRouter=express.Router();

projectRouter.get("/explore",explore);
projectRouter.get("/crafts",crafts);
projectRouter.get("/myProjects",myProjects);
projectRouter.post("/new",addProject);
projectRouter.patch("/crafts/:id",updateLike);
projectRouter.delete("/deleteProject",deleteProject);

module.exports=projectRouter;