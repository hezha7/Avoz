import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import WhyUs from "./Components/WhyUs";
import MainServices from "./Components/MainServices";
import WeTrustedBy from "./Components/WeTrustedBy";
import Footer from "./Components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Element name="home">
        {" "}
        <Home />
      </Element>
      <Element name="whyus">
        {" "}
        <WhyUs />
      </Element>
      <Element name="service">
        {" "}
        <MainServices />
      </Element>
      <Element name="wetrust">
        {" "}
        <WeTrustedBy />
      </Element>

      <Footer />
    </React.Fragment>
  );
}

export default App;
