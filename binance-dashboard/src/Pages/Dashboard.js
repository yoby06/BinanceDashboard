import { Box, Button, Grid, Menu, MenuItem, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import VolumeData from '../Components/Charts/VolumeDatas/VolumeDataDaily'
import MyCarousel from '../Components/Carousel/Carousel'
import VolumeDataWeekly from '../Components/Charts/VolumeDatas/VolumeDataWeekly';
import ShowingVolume from '../Components/ShowingVolume/ShowingVolume';
import PieChart from '../Components/Charts/PieChart';
import ShowingPrice from '../Components/ShowingVolume/ShowingPriceData';
import Clock from '../Components/Clock/Clock';


const Dashboard = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


 function toggleShow() {
    setShow(!show);
  }


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
                
              
              <Box sx={{ flexGrow: 0 }}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper sx={{marginLeft:"1.5rem",height:"63vh"}}> <ShowingVolume/>
                    </Paper>
                  </Grid>

                          {/************** BURAYI TAMAMLA FİYAT CHARTI GETİR ***************/}
                  <Grid item xs={6}>
                    <Paper sx={{marginRight:"1.5rem" ,height:"63vh"}}> <ShowingPrice/>  </Paper> 
                  </Grid>    

                  <Grid item xs={6} sx={{marginTop:"1rem"}}>
                    <Paper sx={{marginLeft:"1rem"}}> <PieChart/> </Paper>
                  </Grid>   

                  <Grid item xs={6} sx={{marginTop:"1rem"}}>
                    <Paper sx={{marginLeft:"1rem"}}>  </Paper>
                  </Grid>   

                </Grid>
              </Box>

  
            <Box/>      
        
          </Box>
      </Box>

    )
}

export default Dashboard