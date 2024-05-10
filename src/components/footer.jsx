import React from "react";
import classes from "./footer.module.scss";
import Button from "./buttons";

function Footer() {
  return (
    <section className={classes.ctaSection}>
      <div className={classes.block}>
        <h2>
          Ready to transform <em>your</em> outdoor space?
        </h2>
        <p>Contact GreenHarbor landscapes for a consultation</p>
        <Button type="primary" text="Get started"></Button>
      </div>
    </section>
  );
}
export default Footer;
