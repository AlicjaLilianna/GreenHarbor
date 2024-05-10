import React from "react";
import classes from "./nav.module.scss";
import Button from "./buttons";

function toggleDropdown() {
  var x = document.getElementById("dropdown");
  if (x.style.width === "250px") {
    x.style.width = "0px";
  } else {
    x.style.width = "250px";
  }
}

function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.jBetween}>
        <div className={classes.mainNav}>
          <a href="/">GreenHarbor</a>
          <ul>
            <li>Portfolio</li>
            <li>About</li>
          </ul>
        </div>
        <div className={classes.mainNav}>
          <div
            className={classes.dropdownButton}
            role="button"
            onClick={toggleDropdown}
          >
            &#9776;
          </div>
          <ul
            className={classes.dropdown}
            id="dropdown"
            style={{
              display: "block",
              width: "0px",
              transition: " all .5s ease-in",
            }}
          >
            <li onClick={toggleDropdown}>&lt;</li>
            <li>Portfolio</li>
            <li>About</li>
          </ul>
          <a href="/">GreenHarbor</a>
        </div>
        <div className={classes.hideOnMobile}>
          <Button type="secondary" text="Get Quota"></Button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
