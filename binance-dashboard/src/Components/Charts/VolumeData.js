import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./VolumeData.css";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

// *************** Chart Data Start ***************

export var data = [
  ["Hour Intervals", "Daily"],
  [1, 0],
];

export const options = {
  chart: {
    title: "Daily volume chart of your coin",
    subtitle: "in United States (USD)",
  },
};

export var volumeData = [];


//  *************** Chart Data End  ***************

/// *** NAME ARRAY ****
export const nameArray = [];
/// *** NAME ARRAY ****

function VolumeData() {
  const [dataX, setDataX] = useState([]);
  const [state, setState] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState("BTCUSDT");



  //*************** USE EFFECT***************
  useEffect(() => {
    loadChart(selectedCoin);
  }, [state]);

  //  *************** Fetching and load the Chart Start ***************



  async function loadChart(name) {
    const api = await fetch(
      `https://www.binance.me/api/v3/klines?symbol=${name}&interval=1h&limit=23`
    );
    let apijson = await api.json();
    setDataX(apijson);
    setState(true);


    for (var i = 0; i < dataX.length; i++) {
      volumeData.push(dataX[i][5]);
    }

    for (var j = 0; j < volumeData.length; j++) {
      data.push([j + 2, volumeData[j]]);
    }

    volumeData = []

  }
  // *************** Fetching and load the Chart End **********************

  function cleanData(){

    for(var len=data.length; 2<len ; len--){
        data.pop()
    }
    

  }


  // ********* Rolldown Menu ******
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  //******** Coıns Names **********/
  const [dataName, setDataName] = useState([]);
  const [stateName, setStateName] = useState(false);

  useEffect(() => {
    getNames();
  }, [stateName]);

  async function getNames() {
    let api = await fetch(
      "https://www.binance.me/api/v3/ticker/price?symbols=%5B%22SOLUSDT%22,%22BTCUSDT%22,%22ETHUSDT%22,%22FILUSDT%22,%22STMXUSDT%22,%22DOGEUSDT%22,%22UNIUSDT%22,%22AVAXUSDT%22,%22XLMUSDT%22,%22MANAUSDT%22%5D"
    );
    let apijson = await api.json();
    setDataName(apijson);
    setStateName(true);

    for (var i = 0; i < dataName.length; i++) {
      nameArray.push(dataName[i].symbol);
    }

  }

  return (
    <>
      {/********** CHART START **********/}
      <Chart
        className="Chart"
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      {/********** CHART END **********/}

      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
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
                cleanData();
                setState(false);
                loadChart(item);
              }}
            >
              {" "}
              {item}{" "}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default VolumeData;
