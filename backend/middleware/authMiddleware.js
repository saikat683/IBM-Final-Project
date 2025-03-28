const jwt=require("jsonwebtoken");
const protect=(req,res,next)=>{
    const token=req.header.authorization;
    if(!token){
        res.status(404).json({message:"Token Missing"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        console.log(err);
        return res.status(404).json({message:"Invalid Token"});
    }
}
module.exports={protect};