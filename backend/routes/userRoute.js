const express=require("express");
const {signUp,login}=require("../controllers/userController");

const userRouter=express.Router();

userRouter.post('/register', signUp);
userRouter.post("/login",login);

module.exports=userRouter;