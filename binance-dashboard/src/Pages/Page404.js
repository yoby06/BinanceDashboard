import { Box, Typography } from '@mui/material'
import React from 'react'

const Page404 = () => {
  return (

            
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                >

                <Box sx={{border:"1px solid black",display:"flex",width:"404px",height:"404px"}}> 
                
                    <Typography display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginLeft="auto"
                        marginRight="auto">
                        Sorry , you can't reach this page now.
                    </Typography>

                </Box> 
            </Box>







    )
}

export default Page404