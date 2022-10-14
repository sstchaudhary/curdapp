import React, { useEffect, useState} from 'react'
import { allUsers,deleteUser } from '../services/api';
import {Table,TableBody,TableHead,TableCell,TableRow,styled, Button} from '@mui/material';
import {Link} from 'react-router-dom';
const StyleTable=styled(Table)`
   width:90%;
   margin:50px auto 0 auto;
`
const Thead=styled(TableRow)`
  background:#000000;
  &>th{
     color:#fff;
     font-size:20px;
  }
`
const TBody=styled(TableRow)`
    &>td{
      font-size:20px;
    }
`
const AllUsers = () => {
   
  const [users,setUsers]=useState([]);
   useEffect(()=>{
        getalluser();
   },[]);

   const getalluser=async()=>{
        let response=await allUsers();
        setUsers(response.data);
         
   }

   const deleteUserDetails=async(id)=>{
         await deleteUser(id);
         getalluser();
   }

  return (
      
         <StyleTable>
           <TableHead>
            <Thead>
              <TableCell>Name</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell></TableCell>
            </Thead>
           </TableHead>
           <TableBody>
                 {
                   users.map(user=>{
                     return(
                         <TBody key={user._id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                            <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" color='secondary' onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                            
                          </TableCell>
                         </TBody>
                     )  
                   })
                 }
           </TableBody>
         </StyleTable>

      
  )
}

export default AllUsers