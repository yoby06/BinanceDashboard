import { Box, Typography } from '@mui/material'
import React from 'react'
import CardPro from '../Components/Card/CardPro'
import MyCarousel from '../Components/Carousel/Carousel'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const Product = () => {
  return (

  <Box className='home' sx={{display:"flex"}}>    
        <Box>
          <Sidebar/> 
        </Box>

      <Box className="homeContainer" sx={{flex:"1"}}> 
      
          <Box>
             <Navbar/>
          </Box>        

          <Box className="PriceCartsHeader" sx={{
                          display:"flex",
                          alignItems:"center",
                          justifyContent:"center",
                          background: "rgb(3,4,94)",
                          background: "radial-gradient(circle, rgba(3,4,94,1) 10%, rgba(242,249,250,1) 100%)",
                          WebkitBoxShadow: "0px 56px 25px 3px rgba(165,184,222,1)",
                          MozBoxShadow: "0px 56px 25px 3px rgba(165,184,222,1)",
                          boxShadow:" 0px 56px 25px 3px rgba(165,184,222,1)",
                          color:"white",
                          }}>
                    <Typography sx={{position:"relative"}}>Favorite Coins <CurrencyBitcoinIcon sx={{position:"absolute"}}/> </Typography>
                </Box>     

                
                <Box  className="PriceCarts" sx={{display:"flex",}}>
                    <MyCarousel/>
               </Box>

      <Box>
       <CardPro/>
      </Box>

      <Box/>      
    </Box>
</Box>

    )
}

export default Product