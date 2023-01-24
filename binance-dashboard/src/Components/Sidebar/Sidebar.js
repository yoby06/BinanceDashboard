import { Avatar, Button,Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DescriptionIcon from '@mui/icons-material/Description';
import "./sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const buttonStyle = {marginTop:"1.5rem" , color:"white", display:"flex",flexDirection:"row",justifyContent:"left",fontSize:".0.5rem"}
  return (

<>  
  <Box sx={{display:"flex",flexDirection:"column", height:"100%",width:"20rem" , background:"#03045e",border:"1px solid black", textAlign:"center", justifyContent:"left"}}> 

  <Link to="/dashboard" style={{textDecoration:"none"}}>
    <Box sx={{margin:"2rem",paddingBottom:"4rem"}}>
      <img className="logoimg" src="https://i.ibb.co/WgX6R2C/Logo.png" alt="Logo WALL@"/>
    </Box>
  </Link>
  
    <Box>
        <a href="https://www.linkedin.com/in/yi%C4%9Fit-o%C4%9Ful-bayarlar-0966691a3/" target="_blank" style={{textDecoration:"none"}}>
        <Button variant="contained" sx={{background:"#023e8a",marginLeft:"auto", marginRight:"auto"}}>
            <Avatar alt="Avatar" src="https://cdn.dribbble.com/users/515705/screenshots/9818728/media/4a706681babc1cf92c04487bcdfbfdde.jpg" />
            <Box sx={{color:"#F2DEBA",marginLeft:"1rem"}}> Yigit Ogul Bayarlar</Box>
        </Button>
        </a>

    </Box>
    
    <Box sx={{paddingBottom:"10px",justifyContent:"left",display:"flex",flexDirection:"column"}}>

      <Link to="/dashboard" style={{textDecoration:"none"}}>
        <Button sx={buttonStyle}>
                    <EqualizerIcon sx={{marginLeft:"10px",paddingRight:"10px"}}/> Dashboard
        </Button>
      </Link>

      <Link to="/user" style={{textDecoration:"none"}}>
        <Button  sx={buttonStyle}>
                    <AccountCircleIcon sx={{marginLeft:"10px",paddingRight:"10px"}}/> User
        </Button>
      </Link>

      <Link to="/product" style={{textDecoration:"none"}}>
        <Button  sx={buttonStyle}>
                    <LocalGroceryStoreIcon sx={{marginLeft:"10px",paddingRight:"10px"}}/> Product
        </Button>
      </Link>

      <Link to="/blog" style={{textDecoration:"none"}}>
        <Button sx={buttonStyle} style={{textDecoration:"none"}}>
                    <DescriptionIcon sx={{marginLeft:"10px",paddingRight:"10px"}}/> Blog
        </Button>
      </Link>

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
                  
                <Link to="/404" style={{textDecoration:"none"}}>
                   <Button variant="contained" sx={{background:"#023e8a",marginTop:"1.5rem"}}>Upgrade To Pro</Button>
               </Link>
                
              </Box>   
             
            </Box>
        </Box>
        
    </Box>

    </Box>


    </>
    )
}

export default Sidebar