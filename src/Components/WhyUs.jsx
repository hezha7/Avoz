import React, { useEffect, useState } from "react";

function WhyUs() {
  const [isWhyUsVisible, setIsWhyUsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const whyUsElement = document.querySelector(".whyUs");
      if (whyUsElement) {
        const rect = whyUsElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.5) {
          setIsWhyUsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={isWhyUsVisible ? "whyUs" : "whyUs whyUs-hidden"}>
      <div
        className={
          isWhyUsVisible ? "whyUsText slide-in_whyUsText" : "whyUsText"
        }
      >
        <h2>Why choose us</h2>
      </div>

      <div
        className={
          isWhyUsVisible
            ? "whyUsTextContent slide-in_whyUsTextContent"
            : "whyUsTextContent"
        }
      >
        <p>What makes us Avoz stand out from the rest</p>
      </div>

      <div
        className={
          isWhyUsVisible
            ? "whyUsCardsAll slide-in_whyUsCardsAll"
            : "whyUsCardsAll"
        }
      >
        <div className="whyUsCards">
          <div className="cards">
            <div className="cardContent">
              <h2 className="experience">Experience in the Field</h2>
              <p className="experienceContent">
                We provided one of the very first web-based management and
                accounting softwares,And we now offer the best.
              </p>
            </div>
            <div className="whyUsCardsImg">
              <img
                style={{ width: "100%", height: "100%",backgroundColor: "white"  }}
                src={require("../assets/report.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="whyUsCards">
          <div className="cards">
            <div className="whyUsCardsImg">
              <img
                style={{ width: "100%", height: "100%",backgroundColor: "white"  }}
                src={require("../assets/web.png")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <h2 className="experience">Freshest and Fastest Technologies</h2>
              <p className="experienceContent">
                We love keeping up with the new technologies and frameworks. We
                use powerful technologies for our softwares, such as Springboot,
                ReactJS, Mysql...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          isWhyUsVisible
            ? "whyUsCardsAll slide-in_whyUsCardsAll"
            : "whyUsCardsAll"
        }
      >
        <div className="whyUsCards">
          <div className="cards">
            <div className="cardContent">
              <h2 className="experience">Super Fast Servers</h2>
              <p className="experienceContent">
                Avoz's servers are SSD and at peak performance. they're in the
                center of the world, making it fast for any user around the
                globe.
              </p>
            </div>
            <div className="whyUsCardsImg">
              <img
                style={{ width: "100%", height: "100%",backgroundColor: "white"  }}
                src={require("../assets/server.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="whyUsCards">
          <div className="cards">
            <div className="whyUsCardsImg">
              <img
                style={{ width: "100%", height: "100%",backgroundColor: "white"  }}
                src={require("../assets/customer-service.png")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <h2 className="experience">24/7 Customer Service</h2>
              <p className="experienceContent">
                Our customer service is always available to help you, because we
                know even one minute is a lot for you and your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
