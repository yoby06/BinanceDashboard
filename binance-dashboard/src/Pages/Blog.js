import styled from '@emotion/styled';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import ReactPlayer from 'react-player'
import MyCarousel from '../Components/Carousel/Carousel';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';




const Blog = () => {
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







          <Box sx={{marginTop:"1rem",marginRight:"2rem",marginLeft:"2rem"}}>
              <Box sx={{ flexGrow: 1 }}>
                 <Grid container spacing={3}>

                    <Grid item xs>
                      <Paper>
                          <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                                <Typography variant="h5" sx={{marginLeft:"1rem",marginRight:"1rem",color:"#023e8a"}}>
                                The most liked Coiniverse shop coins in December 2022
                                </Typography>
                                <Divider />

                                <Typography sx={{textIndent:"2rem",margin:"0 25px", marginTop:"2rem",textAlign:"justify"}}>
                                  In December 2022 Team Coiniverse introduced a new feature that enables you to like the individual coins when you browse them through the countries or shop. This makes it easier for you to get back to your favorite coins, they are stored on your profile under "likes".
                                  <br/>
                                  <br/>
                                  Together with this new feature we started a competition to find out what is your favorite coin in the Coiniverse shop and here are the winners:         
                                </Typography>

                                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center" , justifyContent:"center",marginTop:"1rem"}}>
                                  <Typography style={{color:"#0077b6",fontSize:"24px"}}> The most liked coin is  </Typography> 
                                  <img src="https://assets.pimbex.com/images/product-images/2022-2-oz-niue-silver-king-tuts-tomb-silver-coin-600-obv-pimbex.png" style={{width:"40%"}}/>
                                    <Typography sx={{marginTop:"0.5rem",fontWeight:"bold",textAlign:"justify"}}> 5 DOLLARS SILVER COIN ‘KING TUT’S CURSE’ by Lithuanian Mint </Typography>
                                </Box>

                          </CardContent>
                          <Divider />

                            <CardActions>
                            <a href="https://www.coiniverse.app/blog/the-most-liked-coiniverse-shop-coins-in-december-2022" target="_blank" style={{textDecoration:"none"}}>
                              <Button size="small">Read More</Button>
                            </a>
                            </CardActions>

                        </Card>
                      </Paper>
                    </Grid>

                    <Grid item xs={6}>
                    
                      <Paper sx={{marginTop:"2rem"}}>
                      <Typography variant="h4" sx={{marginLeft:"4rem",marginRight:"1rem",color:"#023e8a"}} > 1 DOLLAR SILVER COIN ‘THE BLACK WATER RABBIT 2023’ </Typography>    
                      <Divider />

                        <Typography variant="body1" sx={{textIndent:"2rem",margin:"0 50px", marginTop:"2rem",textAlign:"justify"}}> To mark the new year 2023, the Lithuanian Mint created a coin for this year’s symbol. It is a coin of exceptional beauty dedicated to the Year of the Black Water Rabbit. The latest work of our masters is not only a great purchase for a collection, but also an original gift for those born in the Year of the Rabbit. </Typography>
                        

                      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1rem"}}>
                        <img src=" https://www.ainsliebullion.com.au/asset-images/SC-2oz-23-Rabbit-PM-2oz-silvercoin-23-rabbit.jpg" width="40%"    
                        
                        
                          style={{
                            marginTop:"4rem",
                            marginBottom:"4rem",
                            WebkitBorderRadius: "300px",
                            MozBorderRadius: "300px",
                            borderRadius: "300px",
                            WebkitBoxShadow: "0px 0px 46px 27px rgba(1,0,26,0.14)",
                            MoxBoxShadow:" 0px 0px 46px 27px rgba(1,0,26,0.14)",
                            boxShadow: "0px 0px 46px 27px rgba(1,0,26,0.14)"

                          }}/>
                      </Box>
                      <Divider />
                      <a href="https://www.coiniverse.app/blog/the-most-liked-coiniverse-shop-coins-in-december-2022" target="_blank" style={{textDecoration:"none"}}>

                      <Button size="medium">Read More</Button>
                      </a>
                      </Paper>
                    </Grid>



                    <Grid item xs>
                      <Paper>

                      <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                                <Typography variant="h5" sx={{marginLeft:"1rem",marginRight:"1rem",color:"#023e8a"}}>
                                Why brands are investing millions in the metaverse
                                </Typography>
                                <Divider />

                                <Typography sx={{textIndent:"2rem",margin:"0 25px", marginTop:"2rem",textAlign:"justify"}}>
                                Gucci, Nike, Burberry and Walmart are just some of the companies buying up digital land as a way to promote their products. 
                                  <br/>
                                  <br/>

                                  Nearly $2bn has been spent in the past year on metaverse real estate, according to analysts.
                                  <br/>
                                  <br/>

                                  But it’s not just big corporations turning to virtual reality: some artists and smaller businesses believe this new technology is the future of retail, and are making products which can only be sold within the metaverse.        
                                </Typography>

                                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center" , justifyContent:"center",marginTop:"1rem"}}>
                                 
                                  <ReactPlayer url='https://youtu.be/-x38ojXzG0I' playing  width="100%" height="10rem"/>
                                 <Typography sx={{marginTop:"0.5rem",fontSize:"12px",fontWeight:"light",textAlign:"left"}}> This film is the BBC’s weekly technology show. 
 </Typography>
                                </Box>

                          </CardContent>
                          <Divider />
                            
                            <CardActions>
                              <a href="https://www.youtube.com/watch?v=-x38ojXzG0I" target="_blank" style={{textDecoration:"none"}}>
                              <Button size="small">Read More</Button>
                              </a>
                            </CardActions>

                        </Card>





                      </Paper>
                    </Grid>

                 </Grid>
             </Box>
          </Box>
    
        

      <Box/>      
    </Box>
</Box>
)
}

export default Blog