import connect from "../../lib/mongodb";
import User from "../../model/schema";

connect()

//this function will handle the requests and the responses
export default async function handler(req,res){
  const {email,password}=req.body

  const user= await User.findOne({email,password})

  if (!user){
    return res.json({status:"Not able to find a user"})
  }
  else{
    res.redirect('/home')
  }
}