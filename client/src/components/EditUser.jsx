import React from 'react'

import styled from '@emotion/styled';
import { editUser } from '../services/api';
import { getUser } from '../services/api';
import { FormControl, FormGroup, Input, InputLabel, Typography,Button } from '@mui/material';
import { useState,useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

 const Container=styled(FormGroup)`
      width:50%;
      margin:5% auto 0 auto;
      & > div{
        margin-top:20px;
      }
 `
  const defaultUser={
     name:'',
     username:'',
     email:'',
     phone:''
  }

const EditUser = () => {
   const [user,setUser]=useState(defaultUser);
   const {id}=useParams();
   const navigate=useNavigate(); 
   
   useEffect(()=>{
         loadUserDetails();
   },[])

   const loadUserDetails=async()=>{
       const response=await getUser(id);
        setUser(response.data); 
   }

   const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
         console.log(user);
   }
     const editUserDetails=async()=>{
             await editUser(user,id);
             navigate('/all');
      }
  return (
      <Container>
      <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>
            Name
          </InputLabel>
           <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
          <InputLabel>
            UserName
          </InputLabel>
           <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
          <InputLabel>
            Email
          </InputLabel>
           <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>
            Phone
          </InputLabel>
           <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={()=>editUserDetails()}>EditUser</Button>
        </FormControl>
      </Container>
  )
}
export default EditUser;