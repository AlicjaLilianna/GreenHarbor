import React from "react";
import Hero from "../components/hero";
import classes from "./homepage.module.scss";
import Flower from "../components/flower";
import wintergarden from "../assets/house.jpg";
import Button from "../components/buttons";
import gardenA from "../assets/gardenA.jpg";
import gardenB from "../assets/gardenB.jpg";
import gardenC from "../assets/gardenC.jpg";
import gardenD from "../assets/gardenD.jpg";

function Accordion(props) {
  return (
    <section className={classes.accordionContainer}>
      <div className={classes.number}>{props.number}</div>
      <div className={classes.accordion}>
        <div role="button" className={classes.accButton}>
          <span className={classes.serviceName}>{props.serviceName}</span>
        </div>
        <div className={classes.accPanel}>
          <p>{props.text}</p>
        </div>
      </div>
    </section>
  );
}

function PortfolioImg(props) {
  return (
    <>
      <div className={classes.imgContainer}>
        <img src={props.img} alt="" />{" "}
        <h5 className={classes.projectTitle}>{props.projTitle}</h5>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <div className={classes.main}>
      <Hero />
      <section className={classes.sectionA}>
        <h3>
          Our passion for <br />
          <em>nature</em>
        </h3>
        <p>
          At GreenHarbor Landscapes, we are driven by a deep passion for nature
          and a commitment to crafting outdoor spaces that go beyond the
          ordinary. With a blend of creativity and sustainability, our team
          transforms landscapes into vibrant retreats, seamlessly integrating
          the beauty of nature with functional design.
        </p>
        <Flower x="-16vw" y="-3vw" size="35vw" />

        <Flower x="5vw" y="190px" size="21vw" />
        <Flower x="85%" y="-5vw" size="31vw" />
        <Flower x="74vw" y="230px" size="10vw" />
      </section>
      <section className={classes.sectionB}>
        <img
          src={wintergarden}
          className={classes.img}
          alt="Beautiful landscape with wintergarden on the front"
        ></img>
        <h3>
          Ser<em>vices</em>
        </h3>
        <Accordion
          number="01."
          serviceName="Landscape Design and Installation"
          text="Create your dream outdoor oasis with our expert landscape design and installation services. From conceptualization to execution, we bring your vision to life with precision and creativity."
        />
        <Accordion
          number="02."
          serviceName="Hardscaping Solutions"
          text="Enhance the functionality and aesthetics of your outdoor space with our hardscaping solutions. From elegant patios to sturdy retaining walls, we design and build custom features that complement your landscape beautifully"
        />
        <Accordion
          number="03."
          serviceName="Sustainable Landscaping Practices"
          text="Promote environmental stewardship with our sustainable landscaping practices. We prioritize the use of native plants, water-efficient irrigation systems, and eco-friendly materials to create landscapes that thrive in harmony with nature."
        />
      </section>
      <section className={classes.sectionC}>
        <section>
          <h3>
            See nature's canvas <br />
            <em>unfold</em>
          </h3>
          <p style={{ marginBottom: "32px" }}>
            Browse through our portfolio to witness the transformations we've
            brought to life. Each project tells a unique story of how we blend
            artistry and nature to create breathtaking landscapes.
          </p>

          <Button type="link" text="See more"></Button>
          <Flower x="-50px" y="-380px" size="135px" />
        </section>
        <section className={classes.portfolioScroll}>
          <PortfolioImg img={gardenA} projTitle="Mesmerizing front yard" />
          <PortfolioImg img={gardenB} projTitle="Little garden of dreams" />
          <PortfolioImg img={gardenC} projTitle="Oasis behind door" />
          <PortfolioImg img={gardenD} projTitle="Inviting butterflies" />
        </section>
      </section>
    </div>
  );
}

export default HomePage;
