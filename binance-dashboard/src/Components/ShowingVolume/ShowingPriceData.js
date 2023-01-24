import { useEffect, useState } from "react";
import PriceDataDaily from "../Charts/PriceDatas/PriceDataDaily";
import PriceDataWeekly from "../Charts/PriceDatas/PriceDataWeekly";
import { Box, Typography } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';
import PriceDataMonthly from "../Charts/PriceDatas/PriceDataMonthly";


export default function ShowingPrice() {
  const [selectedVolume, setSelectedVolume] = useState("Price chart of your coin");

  const [defaultContentVisible,setDefaultContentVisible] = useState(true)
  const [weeklyContentVisible, setWeeklyContentVisible] = useState(false);
  const [dailyContentVisible, setDailyContenVisible] = useState(false);
  const [monthlyContentVisible, setMonthlyContentVisible] = useState(false);

  useEffect(() => {
    selectedVolume === "Daily" ? setDailyContenVisible(true) : setDailyContenVisible(false);
    selectedVolume === "Weekly" ? setWeeklyContentVisible(true) : setWeeklyContentVisible(false);
    selectedVolume === "Monthly" ?  setMonthlyContentVisible(true) : setMonthlyContentVisible(false);
  }, [selectedVolume]);

  const handleOnChange = (e) => {
    setSelectedVolume(e.target.value);

    if(e.target.value === "Daily" ||  "Weekly" ||  "Monthly"){
        setDefaultContentVisible(false)
    }
    
  };

  const setMeDefault = (e) => {
    setDefaultContentVisible(true)
  }

  const renderResult = () => {
    let result;
    setSelectedVolume === "selectInterval"
      ? (result = "Choose the time range")
      : (result = selectedVolume);
    return result;
  };

  return (
    <Box sx={{marginLeft:"1rem"}}>
      <Box >
        <Typography variant="h4" sx={{color:"#023e8a"}} >{renderResult()} <TimelineIcon/> </Typography>
      </Box>
      <hr/>

      <Box sx={{marginTop:"1rem",marginBottom:"1rem"}}>
        <select  value={selectedVolume} onChange={handleOnChange} style={{color:"#1E79D3",fontWeight:"bold",border:"none"}} > 
          <option value="Default" onClick={setMeDefault} >TIME RANGE</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </Box>
      {defaultContentVisible && <PriceDataDaily />}
      {dailyContentVisible && <PriceDataDaily />}
      {weeklyContentVisible && <PriceDataWeekly />}
      {monthlyContentVisible && <PriceDataMonthly />}

      

    </Box>
  );
}


