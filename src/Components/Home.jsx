import HomeSvg from "../assets/homeSvg.svg";
function Home() {
  return (
    <div className="home">
      <div className="homeText">
        <h1
          style={{ color: "#507F76" }}
          className="slide-in_text_avoz avozText"
        >
          Avoz
        </h1>
        <p
          style={{ color: "black", fontWeight: "bold" }}
          className="slide-in_text_innovation innovation"
        >
          " INNOVATION RIGHT HERE "
        </p>
        <div className="slide-in_text_content content">
          <p style={{ fontSize: 14 }}>
            More than 5 years of experience in building and growing technology
            in Kurdistan. We offer next generation apps and softwares
          </p>
        </div>
        <div className="slide-in_text_btn">
          <a href="tel:+9647717569058">
            <button className="homeBtnGetStarted">Get Started</button>
          </a>
        </div>
      </div>

      <div className="homeImg">
        <img src={HomeSvg} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

export default Home;
