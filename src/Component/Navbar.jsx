import React from 'react'
import {Box, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <Box id="navbar-container" width={"100%"} height={"50px"} bg={"teal"}
        padding={"5px"} color={"white"} display={"flex"} justifyContent={"space-evenly"}>
         <Box flex={"5"}>
         <Heading size={"md"}>e-commerce app</Heading>
         </Box>
         <Box flex={"5"} textAlign={"center"} display={"flex"} justifyContent={"space-between"}>
           <Link to={"/index"}>Home</Link>
           <Link to={"/product"}>Product</Link>
            <Link to={"/search"}>Search</Link>
          
         </Box>
       </Box>
    )
}

export default Navbar
