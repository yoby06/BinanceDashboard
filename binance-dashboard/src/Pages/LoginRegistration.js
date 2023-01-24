import React from 'react'
import Typewritter from '../Components/Typewritter/Typewritter'
import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import SignUp from '../Components/Login/SignUp';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    sx={{   
        background: "rgb(75,196,254)",
        background: "radial-gradient(circle, rgba(75,196,254,1) 60%, rgba(190,248,255,1) 100%)",
    }}>

    <Box sx={{display:"flex",width:"50vw",height:"50vh",justifyContent:"center",textAlign:"center",alignItems:"center",background:"#4bc4fe",borderRadius:"20px",}}> 

            <Box sx={{background:"white",width:"50%",height:"100%",borderBottomLeftRadius:"20px",borderTopLeftRadius:"200px"}}>

                <Box>
                    <img src="https://i.ibb.co/WgX6R2C/Logo.png" alt="" style={{objectFit:"cover",width:"100%",height:"100%",borderTopLeftRadius:"20px"}}/>
                </Box>

                <Box sx={{marginTop:"3rem",marginLeft:"1rem",marginRight:"1rem",height:"4rem"}}>
                    <Typewritter/>
                </Box>
                
                <Link to="/404" style={{textDecoration: "none"}}>
                <Box sx={{marginTop:"8rem",marginRight:"auto"}}> 
                 <Button variant="outlined" size="medium" sx={{height:"2rem",color:"#03045E",fontSize:"10px"}} endIcon={<InfoIcon sx={{color:"#0023FF"}}/>}> Get more information  </Button>
                </Box>
                </Link>
            </Box>


            <Box sx={{background:"white",width:"50%",height:"100%",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",borderTopRightRadius:"20px",borderBottomRightRadius:"20px",borderLeft:"1px dotted lightblue"}}>
                
                <Box sx={{marginBottom:"4rem"}} >
                        <SignUp/>
                </Box>
            
            </Box>

                    
    </Box>
</Box>


    )
}

export default Registration