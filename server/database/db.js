import mongoose from 'mongoose';

const connection=async(username,password)=>{
  const URL=`mongodb+srv://${username}:${password}@crud-app.qs3vd5h.mongodb.net/?retryWrites=true&w=majority`;
  try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log("daatabase connected succesfully");
     }
  catch(error){
     console.log('error while connecting database',error);
  }
}
export default connection;