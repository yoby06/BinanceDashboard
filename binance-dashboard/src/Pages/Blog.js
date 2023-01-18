import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

const Blog = () => {
  return (
    <Box className='home' sx={{display:"flex"}}>    

    <Sidebar/> 

      <Box className="homeContainer" sx={{flex:"1"}}> 
      
          <Box>
             <Navbar/>
          </Box>        


        BLOG

      <Box/>      
    </Box>
</Box>
)
}

export default Blog