import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Typewritter from '../Components/Typewritter/Typewritter'
import InfoIcon from '@mui/icons-material/Info';
const Login = () => {
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

                <Box sx={{display:"flex",width:"50vw",height:"50vh",justifyContent:"center",textAlign:"center",alignItems:"center",background:"#4bc4fe",borderRadius:"20px",border:"1px solid black"}}> 

                        <Box sx={{background:"white",width:"50%",borderRight:"1px solid black",height:"100%",borderBottomLeftRadius:"20px",borderTopLeftRadius:"200px"}}>
                            <Box>
                                <img src="https://i.ibb.co/WgX6R2C/Logo.png" alt="" style={{objectFit:"cover",width:"100%",height:"100%",borderTopLeftRadius:"20px",borderBottomLeftRadius:"100px"}}/>
                            </Box>

                            <Box sx={{marginTop:"3rem",marginLeft:"1rem",marginRight:"1rem",height:"4rem"}}>
                                <Typewritter/>
                            </Box>

                            <Box sx={{marginTop:"8rem",marginRight:"auto"}}> 
                             <Button variant="outlined" size="medium" sx={{height:"2rem",color:"#03045E",fontSize:"10px"}} endIcon={<InfoIcon sx={{color:"#0023FF"}}/>}> Get more information  </Button>
                            </Box>

                             </Box>


                        <Box sx={{width:"50%"}}>
                            B
                        </Box>

                                
                </Box>
        </Box>

  )
}

export default Login