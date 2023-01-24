import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./VolumeData.css";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// *************** Chart Data Start ***************

export var volumeData = [];
export var volumeDataNew = [];
export const nameArray = [];




export const options = {
  chart: {
    title: "Monthly volume chart of your coin (The given data based on most recent date)",
    subtitle: "in United States (USD)",
  },
};


//  *************** Chart Data End  ***************

function VolumeDataMonthly() {
  const [dataX, setDataX] = useState([
    ["Week Intervals", " "],
    ["First Week", 0],
    ["Second Week", 0],
    ["Third Week", 0],
    ["Last Week", 0],
  ]);
  const [state, setState] = useState(false);


  //*************** USE EFFECT***************
  useEffect(() => {
    loadChart();
  }, [state]);

  //  *************** Fetching and load the Chart Start ***************


  async function loadChartData(apijson,name) {
    setDataX([
        ["Week Intervals", name],
        ["First Week", parseInt(apijson[0][5])],
        ["Second Week", parseInt(apijson[1][5])],
        ["Third Week",parseInt(apijson[2][5]) ],
        ["Last Week", parseInt(apijson[3][5])],
      ])
    setState(true);

  }
  async function loadChart(name) {
    const api = await fetch(
      `https://www.binance.me/api/v3/klines?symbol=${name}&interval=1M&limit=4`
    );
    let apijson = await api.json();
    console.log(apijson)

    await loadChartData(apijson,name)

    console.log(dataX)

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


  const [dataName, setDataName] = useState([]);
  const [stateName, setStateName] = useState(false);

  useEffect(() => {
    getNames();
  }, [stateName]);


  async function setDataNameFunc(apijson){
    setDataName(apijson);
    setStateName(true);

    for (var i = 0; i < dataName.length; i++) {
      nameArray.push(dataName[i].symbol);
    }
  }

  async function getNames() {
    let api = await fetch(
      "https://www.binance.me/api/v3/ticker/price?symbols=%5B%22SOLUSDT%22,%22BTCUSDT%22,%22ETHUSDT%22,%22FILUSDT%22,%22STMXUSDT%22,%22DOGEUSDT%22,%22UNIUSDT%22,%22AVAXUSDT%22,%22XLMUSDT%22,%22MANAUSDT%22%5D"
    );
    let apijson = await api.json();
    await setDataNameFunc(apijson)
   
  }



  return (
    <>

<Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{position:"absolute",top:"14.9rem",left:"34rem"}}
      >
        Coins <KeyboardArrowDownIcon fontSize="small" sx={{marginLeft:"3rem"}}/>

      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      > 
        {nameArray.map((item, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                handleClose();
                loadChart(item)
              }}
            >
              {" "}
              {item}{" "}
            </MenuItem>
          );
        })}
      </Menu>
        

      <Chart
        className="Chart"
        chartType="Line"
        width="100%"
        height="400px"
        data={dataX}
        options={options}
      />
        
      {/********** CHART END **********/}

      

    </>
  );
}

export default VolumeDataMonthly;
