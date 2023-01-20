import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import VolumeData from '../Components/Charts/VolumeData'
import MyCarousel from '../Components/Carousel/Carousel'
import VolumeDataWeekly from '../Components/Charts/VolumeDataWeekly';

const Dashboard = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
                          webkitBoxShadow: "0px 56px 25px 3px rgba(165,184,222,1)",
                          mozBoxShadow: "0px 56px 25px 3px rgba(165,184,222,1)",
                          boxShadow:" 0px 56px 25px 3px rgba(165,184,222,1)",
                          color:"white",
                          }}>
                    <Typography sx={{position:"relative"}}>Favorite Coins <CurrencyBitcoinIcon sx={{position:"absolute"}}/> </Typography>
                </Box>     

                
                <Box  className="PriceCarts" sx={{display:"flex",}}>
                    <MyCarousel/>
               </Box>


                        {/***************** VOLUME CHART ****************/}
               <Box className='VolumeChart' sx={{width:"40rem",marginLeft:"1rem",marginTop:"2rem"}}>
                  
                        <Typography variant='h3' sx={{color:"#0077b6"}}> Volume Charts</Typography>
                 
                 
                        <VolumeData/>
          
                 
                 
                 
                  <Button
                      id="demo-positioned-button"
                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      sx={{color:"gray",border:"1px solid black",borderRadius:"30%"}}
                    >
                      More Chart 
                    </Button>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}>
                      <MenuItem onClick={handleClose}>Daily Chart</MenuItem>
                      <MenuItem onClick={handleClose}>Weekly Chart</MenuItem>
                      <MenuItem onClick={handleClose}>Monthly Chart</MenuItem>
                    </Menu>
                </Box>
            <Box/>      
        
          </Box>
      </Box>

    )
}

export default Dashboard