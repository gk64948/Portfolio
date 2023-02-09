import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./Home.css";
import "./HomeStyle.css";

function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["REACT JS BEGINNER"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="leftDiv">
        <div className="contentDiv">
          <h2>Hi, I'm Gaurav Kumar  </h2>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <h1>
            From <span className="i">I</span> <span className="n">N</span>{" "}
            <span className="d">D</span>
          </h1>
        </div>
      </div>
      <div className="rightDiv">
        <div className="imgDiv">
          <div className="socialMedia">
            <a
              target={`_blank`}
              href="https://www.linkedin.com/in/gaurav-kumar-7a3368201/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a target={`_blank`} href="https://github.com/gk64948">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              target={`_blank`}
              href="https://instagram.com/singhaniya64948?igshid=YmMyMTA2M2Y="
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <img src="asset/man.jpeg" className="image" alt="loading" />
        </div>
      </div>
    </div>
  );
}

export default Home;
