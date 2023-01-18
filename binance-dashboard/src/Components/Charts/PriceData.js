import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Card, List, Typography } from "@mui/material";


const PriceData = () => {
    
    const[data, setData] = useState([])
  useEffect(() => {
    testfunc()
  }, [])


  async function testfunc(){
      let api = await fetch('https://www.binance.me/api/v3/ticker/price?symbols=%5B%22SOLUSDT%22,%22BTCUSDT%22,%22ETHUSDT%22,%22FILUSDT%22,%22STMXUSDT%22,%22DOGEUSDT%22,%22UNIUSDT%22,%22AVAXUSDT%22,%22XLMUSDT%22,%22MANAUSDT%22%5D')
      let apijson = await api.json()
      setData(apijson)
  }


  const cartTypography = {fontSize:"16px",marginLeft:"0.2rem",fontFamily: "Oswald, sans-serif"
}

  const cartPrice = { fontSize:"14px",marginLeft:"auto",paddingRight:"0.5rem",fontFamily: "Oswald, sans-serif" }

return (
<>
  <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap: "wrap",width:"100%"}}>
        {
        data.map((item,index) => {
          return(
            <Box key={index} sx={{display:"flex",margin:"10px",width:"8.4rem", height:"2rem",border:"1px double #f2f9fa", alignItems:"center", justifyContent:"left",fontSize:"10px"}}>
                <Typography sx={cartTypography}> {item.symbol + " "} </Typography>
                <Typography sx={cartPrice}>  {" " + parseFloat(item.price).toFixed(2) + "$"}</Typography>
            </Box>
          )
        })
      }
      </Box>
      </>
)


}
export default PriceData