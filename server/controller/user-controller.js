  import User from "../schema/user-schema.js";

  export const adduser=async(request,response)=>{
    const user=request.body;
    const newUser=new User(user);
    try{
      await newUser.save();
      response.status(201).json(newUser);
      
    }
  catch(error){
     response.status(409).json({message:error.message});
  }
}
 

 export const alluser=async(request,response)=>{
    try{
      const users=await User.find({});
      response.status(201).json(users);
      
    }
  catch(error){
     response.status(409).json({message:error.message});
  }
}
export const getuser=async(request,response)=>{
   
  try{
    //const user=await User.find({_id:request.params.id});//1st method
    const user=await User.findById(request.params.id); //2nd method
    response.status(201).json(user);
    
  }
catch(error){
   response.status(409).json({message:error.message});
}
}

export const edituser=async(request,response)=>{
     let user=request.body;
     const edit_user=new User(user);
 
 try{
     await User.updateOne({_id:request.params.id},edit_user);
   response.status(201).json(edit_user);
   
 }
catch(error){
  response.status(409).json({message:error.message});
}
}
export const deleteuser=async(request,response)=>{

try{
  await User.deleteOne({_id:request.params.id});
  response.status(200).json({message:'user deleted successfully'});
}
catch(error){
response.status(409).json({message:error.message});
}
}



