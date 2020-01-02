import React, { Fragment } from "react";
import Footer from "../layout/Footer";

const AboutUs = () => {
  return (
    <Fragment>
      <div>
        <img
          src="https://www.cafecoffeeday.com/sites/default/files/About-Us.jpg"
          alt="About us cover image"
          style={imgStyle}
        />

        <div className="container" style={spanStyle}>
          <h4>About Us</h4>
          <p>
            Café Coffee Day, a part of Coffee Day Global Limited, is India’s
            favourite hangout for coffee and conversations. Popularly known as
            CCD, we strive to provide the best experience to our guests. Our
            coffees are sourced from thousands of small coffee planters, who
            made us who we are today and we're glad to be a part of their lives.
            We opened our first cafe in 1996 at Brigade Road in Bangalore – the
            youth and the young at heart immediately took to the cafe, and it
            continues to be one of the most happening places in the city. CCD to
            the youth is a “hangout” spot where they meet people, make
            conversations, and have a whole lot of fun over steaming cups of
            great coffee.It's been an exciting journey since then to becoming
            the largest organised retail cafe chain in the country. We’re also
            present in Austria, Czech Republic and Malaysia, so if your travel
            takes you there, do stop by our outlets to get a taste from back
            home!
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

const imgStyle = {
  height: "20%",
  width: "100%"
};

const spanStyle = {
  paddingleft: "20px",
  paddingright: "20px"
};

export default AboutUs;
