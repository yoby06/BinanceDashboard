import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

const Product = () => {
  return (

  <Box className='home' sx={{display:"flex"}}>    

          <Sidebar/> 

      <Box className="homeContainer" sx={{flex:"1"}}> 
      
          <Box>
             <Navbar/>
          </Box>        


        PRODUCT


      <Box/>      
    </Box>
</Box>

    )
}

export default Product