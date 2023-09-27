import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const NavbarWrapper=styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   gap:60px;
   ${'' /* outline:none; */}
   padding:20px;
   border:none;
   background-color:pink;
   color:white;
`
export const Navbar = () => {
  return (
         <NavbarWrapper>
         <Link to="/">Home</Link>
          <Link to="/blogpage">Blog</Link>
          <Link to="/homepage">About</Link>
         </NavbarWrapper>
  )
}
