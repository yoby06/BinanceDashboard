import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import PriceData from "../Charts/PriceData";
import { Box } from "@mui/system";
import { ListItem, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";
import './carousel.css'




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];




function MyCarousel() {

    const[data, setData] = useState([])
    useEffect(() => {
      testfunc()
    }, [])
    
    
    async function testfunc(){
        let api = await fetch('https://www.binance.me/api/v3/ticker/price?symbols=%5B%22SOLUSDT%22,%22BTCUSDT%22,%22ETHUSDT%22,%22FILUSDT%22,%22STMXUSDT%22,%22DOGEUSDT%22,%22UNIUSDT%22,%22AVAXUSDT%22,%22XLMUSDT%22,%22MANAUSDT%22%5D')
        let apijson = await api.json()
        setData(apijson)
    }
    
  return (
    <>

      <Box  sx={{ width:"100%",background:"white",margin:"10px"}} className="App">
                <Carousel enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints } >
                        {
                                data.map((item,index) => {
                                return(
                                    <ListItem key={index} sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        height:"2rem",
                                        width:"100vw",
                                        background:"#03045e",
                                        color:"#fff",
                                        margin: "0 15px",
                                        fontSize:"4em",
                                        border:"1px double #cfcfcf"
                                        }} >
                                        <Typography sx={{marginRight:"auto"}}> {item.symbol + " "} </Typography>
                                        <Typography>  {item.price} </Typography>
                                    </ListItem>
                            )})
                        }






        </Carousel>
      </Box>
    </>
  );
}

export default MyCarousel