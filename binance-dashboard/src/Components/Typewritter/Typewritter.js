import { Box } from '@mui/material';
import React from 'react'
import Typewriter from "typewriter-effect";

const Typewritter = () => {
  return (
<>

    <Box sx={{
        fontFamily: "sans-serif",
        fontWeight:"400",
        fontStyle:"italic",
        fontSize:"12px",
        textAlign: "justify",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"white",
        color:"gray"
  }}>
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Welcome to Wall@")
       .pauseFor(1000)
       .deleteAll()
       .typeString("The Wall@ App is a tool used to monitor, view and analyze user data via graphs and tables. Our aim is to provide an idea about the general situation of the users by reaching the highest level of data with the least interaction in the shortest time.")
       .start();
       }}
       />
    </Box>

</>


    )
}

export default Typewritter