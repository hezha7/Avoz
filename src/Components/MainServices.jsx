import React, { useEffect, useState } from "react";
import ServiceSVG from "../assets/service.svg";

function MainServices() {
  const [isWhyUsVisible, setIsWhyUsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const whyUsElement = document.querySelector(".MainServices");
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
    <div
      className={
        isWhyUsVisible ? "MainServices" : "MainServices MainServices-hidden"
      }
    >
      <div className="mainServicesContents">
        <div className="MainServicesImageColumn">
         
          <h2
            className={
              isWhyUsVisible ? "ourService slide-in_MourService" : "ourService"
            }
          >
            Our Main Services
          </h2>
          <p
            className={
              isWhyUsVisible
                ? "MourServiceContent slide-in_MourServiceContent"
                : "MourServiceContent"
            }
          >
            Together, let's make your vision a reality.
          </p>
          <div
            className={
              isWhyUsVisible
                ? "ourServiceImage slide-in_whyUsTextContent"
                : "ourServiceImage"
            }
          >
            <img
              src={ServiceSVG}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className="MainServicesCardsColumn">
          <div className="MainServicesCards">
            <div
              className={
                isWhyUsVisible
                  ? "MainServicesCard slide-in_ourServiceCard1"
                  : "MainServicesCard"
              }
            >
              <div className="whyUsCardsImg">
                <img
                  style={{ width: "100%", height: "100%" ,backgroundColor: "white" }}
                  src={require("../assets/cursor.png")}
                  alt=""
                />
              </div>

              <h2 className="whyUsCardsTitle">Web</h2>
              <div className="whyUsCardsText">
                <p style={{ backgroundColor: "white" }}>
                  We build elegant and functional solutions using Mysql,
                  Springboot, React and more.
                </p>
              </div>
            </div>

            <div
              className={
                isWhyUsVisible
                  ? "MainServicesCard slide-in_ourServiceCard1"
                  : "MainServicesCard"
              }
            >
              <div className="whyUsCardsImg">
                <img
                  style={{ width: "100%", height: "100%",backgroundColor: "white"  }}
                  src={require("../assets/electric.png")}
                  alt=""
                />
              </div>

              <h2 className="whyUsCardsTitle">Avoz Apps</h2>
              <div className="whyUsCardsText">
                <p style={{ backgroundColor: "white" }}>
                  Boost your business with one of our powerful Management
                  Systems
                </p>
              </div>
            </div>
          </div>

          <div className="MainServicesCards">
            <div
              className={
                isWhyUsVisible
                  ? "MainServicesCard slide-in_ourServiceCard2"
                  : "MainServicesCard"
              }
            >
              <div className="whyUsCardsImg">
                <img
                  style={{ width: "100%", height: "100%",backgroundColor: "white"  }}
                  src={require("../assets/write.png")}
                  alt=""
                />
              </div>

              <h2 className="whyUsCardsTitle">Custom Solution</h2>
              <div className="whyUsCardsText">
                <p style={{ backgroundColor: "white" }}>
                  We develop and deliver programs designed around your specific
                  business goals using a foundation of research.
                </p>
              </div>
            </div>

            <div
              className={
                isWhyUsVisible
                  ? "MainServicesCard slide-in_ourServiceCard2"
                  : "MainServicesCard"
              }
            >
              <div className="whyUsCardsImg">
                <img
                  style={{ width: "100%", height: "100%" ,backgroundColor: "white"  }}
                  src={require("../assets/mobile.png")}
                  alt=""
                />
              </div>

              <h2 className="whyUsCardsTitle">Mobile</h2>
              <div className="whyUsCardsText">
                <p style={{ backgroundColor: "white" }}>
                  We deliver apps essentials at your finger tips. Functional,
                  flawless and easy to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;
