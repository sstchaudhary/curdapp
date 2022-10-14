import axios from 'axios';

const URL="http://localhost:8000";
export const addUser=async(data)=>{
    try{
        return await axios.post(`${URL}/add`,data); 
    }
    catch(error){
         console.log("erro while calling add user api",error);
    }
    
}

export const allUsers=async()=>{
    try{
        return await axios.get(`${URL}/all`); 
    }
    catch(error){
         console.log("erro while calling add user api",error);
    }
    
}

export const getUser=async(id)=>{
    try{
       return await axios.get(`${URL}/${id}`);
     
      
    }
  catch(error){
    console.log("erro while calling getuser api",error);
  }
  }
  
  export const editUser=async(user,id)=>{
    try{
       //return await axios.post(`${URL}/${id}`,user);
       return await axios.put(`${URL}/${id}`,user);
     
      
    }
  catch(error){
    console.log("erro while calling edituser api",error);
  }
  }
  export const deleteUser=async(id)=>{
    try{
      return await axios.delete(`${URL}/${id}`);
     
      
    }
  catch(error){
    console.log("erro while calling deleteUser api",error);
  }
  }