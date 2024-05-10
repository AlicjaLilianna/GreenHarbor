import React from "react";
import classes from "./buttons.module.scss";

function Button(props) {
  switch (props.type) {
    case "primary":
      return (
        <button type="button" className={classes.btnPrimary}>
          {props.text}
        </button>
      );

    case "secondary":
      return (
        <button type="button" className={classes.btnSecondary}>
          {props.text}
        </button>
      );
    case "link":
      return (
        <button type="button" className={classes.btnLink}>
          {props.text}
        </button>
      );
    default:
      return <></>;
  }
}

export default Button;
