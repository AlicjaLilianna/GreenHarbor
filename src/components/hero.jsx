import React from "react";
import Button from "./buttons";
import classes from "./hero.module.scss";

function Hero() {
  return (
    <header>
      <div className={classes.heroImage}></div>
      <div className={classes.heroContent}>
        <h1 className={classes.h1}>
          <span className={classes.overTitle}>Your Dream</span>
          <span className={classes.title}>
            <span className={classes.inMask}>land</span>scape
          </span>
        </h1>
        <p>
          Find solace in your own outdoor haven, where GreenHarbor Landscapes
          awaits to turn your vision into reality
        </p>
        <Button type="primary" text="Explore your services"></Button>
      </div>
    </header>
  );
}

export default Hero;
