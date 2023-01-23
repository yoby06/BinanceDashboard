import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["BTC", 1.3],
  ["ETH", 6],
  ["XLM", 22],
  ["DOGE", 30],
  ["SOL", 4],
  ["STM", 30],
  ["MANA", 50],
  ["UNI", 40],
  ["AVAX", 40],
  ["FIL", 20],

];

export const options = {
  title: "My Coin Wallet",
  is3D: true,
  colors: ['#03045e', '#023e8a', '#0077b6', '#0096c7', '#00b4d8','#48cae4','#48cae4','#90e0ef','#ade8f4','#caf0f8'],


  titleTextStyle: {
    color: "#023e8a",    // any HTML string color ('red', '#cc00cc')
    fontSize:"24"
}
};




export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}