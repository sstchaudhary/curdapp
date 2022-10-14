import express from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
import {adduser,alluser,getuser,edituser,deleteuser} from '../server/controller/user-controller.js';
const app=express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


app.post('/add',adduser);
app.get('/all',alluser);
app.get('/:id',getuser);
//app.post('/:id',edituser);
app.put('/:id',edituser);
app.delete('/:id',deleteuser);



const PORT=process.env.PORT||8000;
 const username=process.env.DB_USERNAME;
 const password=process.env.DB_PASSWORD;
connection(username,password);
app.listen(PORT,'localhost',()=>{
    console.log(`server running on port ${PORT}`);
})