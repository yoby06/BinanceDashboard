import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./VolumeData.css"
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

// *************** Chart Data Start ***************

export const data = [

  [
    "Days",
    "Daily",
  ],
  [1,0],
];

export const options = {
  chart: {
    title: "Daily volume chart of your coin",
    subtitle: "in United States (USD)",
  },
};

//  *************** Chart Data End  ***************


/// *** NAME ARRAY ****
export const nameArray = []
/// *** NAME ARRAY ****


function VolumeData() {    
  const[dataX, setDataX] = useState([])
  const [state, setState] = useState(false)
  

  //*************** USE EFFECT***************
  useEffect(() => {
      testfunc()
    }, [state])

    
//  *************** Fetching and load the Chart Start ***************
async function testfunc(){
    let api = await fetch('https://www.binance.me/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=23')
    let apijson = await api.json()
    setDataX(apijson)
    setState(true)

    var volumeData = []
    
    for(var i=0;i<dataX.length;i++){
      volumeData.push(dataX[i][5])
    }

    for(var j=0; j < volumeData.length ; j++){
       data.push([j+2,volumeData[j]])
    }    
}
// *************** Fetching and load the Chart End **********************


// ********* Rolldown Menu ****** 
const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  function SomeFunctions(){
    handleClose();
  }


//******** Coıns Names **********/
const[dataName, setDataName] = useState([])
const [stateName, setStateName] = useState(false)

useEffect(() => {
  getNames()
}, [stateName])



async function getNames(){
    let api = await fetch('https://www.binance.me/api/v3/ticker/price?symbols=%5B%22SOLUSDT%22,%22BTCUSDT%22,%22ETHUSDT%22,%22FILUSDT%22,%22STMXUSDT%22,%22DOGEUSDT%22,%22UNIUSDT%22,%22AVAXUSDT%22,%22XLMUSDT%22,%22MANAUSDT%22%5D')
    let apijson = await api.json()
    setDataName(apijson)
    setStateName(true)


    
    for(var i=0; i<dataName.length; i++){
        nameArray.push(dataName[i].symbol)
    }

    console.log(nameArray)
}


  return (
     <>
     {/********** CHART START **********/}
    <Chart className="Chart"
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
       />
      {/********** CHART END **********/}


      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Coins
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          { nameArray.map((item,index) => {
          return(
            <MenuItem key={index} onClick={() => SomeFunctions()}> {item} </MenuItem>
          )
          })
          }
      </Menu>
    
    </>
   );
}

export default VolumeData;