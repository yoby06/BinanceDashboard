import { LogoDev } from '@mui/icons-material'
import { Avatar, Button, createTheme, Link, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DescriptionIcon from '@mui/icons-material/Description';
import "./sidebar.css";

const Sidebar = () => {
    const buttonStyle = {marginTop:"1.5rem" , color:"white", display:"flex",flexDirection:"row",justifyContent:"left",fontSize:".0.5rem"}
  return (

<>  
  <Box sx={{display:"flex",flexDirection:"column", height:"100%",width:"20rem" , background:"#03045e",border:"1px solid black", textAlign:"center", justifyContent:"left"}}> 

  
    <Box sx={{margin:"2rem",paddingBottom:"4rem"}}>
      <img className="logoimg" src="https://i.ibb.co/WgX6R2C/Logo.png" alt=""/>
    </Box>

    <Box>
        <Button variant="contained" sx={{background:"#023e8a",marginLeft:"auto", marginRight:"auto"}}>
        <Avatar alt="Avatar" src="https://cdn.dribbble.com/userupload/3719041/file/original-a961817c221095421997301577064fe4.png?compress=1&resize=1024x768" />

            <Box sx={{color:"#F2DEBA",marginLeft:"1rem"}}> Yigit Ogul Bayarlar</Box>
     </Button>
    </Box>
    
    <Box sx={{paddingBottom:"10px",justifyContent:"left",display:"flex",flexDirection:"column"}}>
        <Button sx={buttonStyle}>
                    <EqualizerIcon sx={{marginLeft:"10px",paddingRight:"10px"}}/> Dashboard
        </Button>

        <Button  sx={buttonStyle}>
                    <AccountCircleIcon sx={{marginLeft:"10px",paddingRight:"10px"}}/> User
        </Button>

        <Button  sx={buttonStyle}>
                    <LocalGroceryStoreIcon sx={{marginLeft:"10px",paddingRight:"10px"}}/> Product
        </Button>

        <Button sx={buttonStyle}>
                    <DescriptionIcon sx={{marginLeft:"10px",paddingRight:"10px"}}/> Blog
        </Button>


        <Box className="navFooter" sx={{background:"##4E6C50",display:"flex",flexDirection:"column"}}>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"8rem"}} >
              <Avatar alt="Help" src="https://img.freepik.com/vector-premium/linda-mujer-sonriente-call-center-soporte-voz-concepto-soporte-ayuda-virtual-linea_92289-336.jpg?w=826"         sx={{ width: "8rem", height: "8rem" , marginLeft:"auto",marginRight:"auto"}}/>            

              <Box  sx={{marginTop:"auto",alignContent:"flex-end"}}>
                <Typography fontWeight="bold" sx={{marginTop:"1.5rem",color:"white"}}>
                    Get More ?
                </Typography >  
                <Typography sx={{marginTop:"1.5rem",color:"white"}}> 
                    From only 8.99$
                </Typography>

                <Button variant="contained" sx={{background:"#023e8a",marginTop:"1.5rem"}}>Upgrade To Pro</Button>

               
                
              </Box>   
             
            </Box>
        </Box>
        
    </Box>

    </Box>


    </>
    )
}

export default Sidebar