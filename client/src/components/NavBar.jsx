import React from 'react'
import { NavLink } from 'react-router-dom'
import {AppBar,Toolbar} from '@mui/material'
import styled from '@emotion/styled'
 const Header=styled(AppBar)`
 background:#111111;
  
 `
const Tabs=styled(NavLink)`
  font-size:20px;
  margin-right:20px;
  color:inherit;
  text-decoration:none
`
const NabBar = () => {
  return (
  <Header position='static'>
    <Toolbar>
        <Tabs to='/'>CurdApp</Tabs>
        <Tabs to='/all'>All Users</Tabs>
        <Tabs to='/add'>Add User</Tabs>
    </Toolbar>
  </Header>
  )
}

export default NabBar;