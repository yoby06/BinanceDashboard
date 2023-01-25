import React from "react";
import ReactDOM from "react-dom";
import ReactAwesomeClock from "react-awesome-clock";


const Clock = () => {
  return (

    <div>
        <ReactAwesomeClock
          day={true}
          style={{
            color: "white",
            fontSize: 20,
            textShadow: "0 0 10px blue",
            fontFamily: "aerial"
          }}
        />
        
      </div>


    )
}

export default Clock