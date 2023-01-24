import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (

            
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{   
                    background: "rgb(75,196,254)",
                    background: "radial-gradient(circle, rgba(75,196,254,1) 60%, rgba(190,248,255,1) 100%)",

                }}
>
                

                <Box sx={{display:"flex",flexDirection:"column",width:"50vw",height:"50vh",justifyContent:"center",textAlign:"center",alignItems:"center",background:"#4bc4fe",borderRadius:"20px"}}> 
                
                        <img src="https://img.freepik.com/premium-vector/web-page-404-broken-robot-icon-page-found-flat-style-illustration_285336-603.jpg?w=1380" alt="" style={{width:"100%",height:"80%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}}/>
                        
                        <Link to="/dashboard" style={{textDecoration:"none",width:"60%",marginTop:"2rem",marginBottom:"1rem"}}>
                        <Button variant="outlined" sx={{width:"60%",height:"20%",marginTop:"2rem",marginBottom:"1rem",fontWeight:"bold",border:"none",   
                        background: "rgb(255,255,255)",
                        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(72,202,228,1) 100%)",
                    }} endIcon={<SendIcon />}> Go to home </Button>
                    </Link>
                </Box> 
            </Box>







    )
}

export default Page404