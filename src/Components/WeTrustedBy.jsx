import React from "react";
import Arsa from "../assets/Group15.svg";
import grand from "../assets/Group45.svg";
import Karwan from "../assets/Group65.svg";
import petrol from "../assets/1.svg";
import Mashhad from "../assets/aaa.svg";

function WeTrustedBy() {
  return (
    <div className="WeTrustedByMain">
      <h1>We are trusted by</h1>
      <div className="WeTrustedBy">
        <div className="WeTrustedByImage">
          <img src={Arsa} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="WeTrustedByImage">
          <img src={Mashhad} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="WeTrustedByImage">
          <img src={Karwan} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="WeTrustedByImage">
          <img src={petrol} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="WeTrustedByImage">
          <img src={grand} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default WeTrustedBy;
