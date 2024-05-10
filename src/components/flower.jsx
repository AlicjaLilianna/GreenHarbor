import React from "react";
import classes from "./flower.module.scss";
import flower from "../assets/flower.png";
function calculateSize(max, min) {
  let maxVw = "1600px";
  let minVw = "460px";
  // return min + (max - min) * ((screen.width - minVw) / maxVw - minVw);
}

function Flower(props) {
  return (
    <img
      src={flower}
      className={classes.flower}
      alt=""
      // width={props.size}
      // height={props.size}
      style={{
        left: props.x,
        marginTop: props.y,
        width: props.size,
        height: props.size,
      }}
    ></img>
  );
}

export default Flower;
