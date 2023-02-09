import React, { useEffect, useState } from "react";
import "./About.css";
import "./AboutStyle.css";

function About() {
  const [btnState, setBtnState] = useState(false);

  useEffect(() => {}, [btnState]);

  return (
    <div className="about" id="about">
      <div className="leftDiv">
        <div className="contentDiv">
          <h1>About us</h1>
          <p>
          I am passionate about my work, Because I love what I do, I have a steady source of motivation that drives me to do my best.
          </p>
          <div className="photoDiv">
            <img src="./asset/men.jpeg" alt="men" />
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <div className="btnDiv">
          <div onClick={() => setBtnState(!btnState)} className="btn1">
            {btnState ? "Education" : "Skills"}
          </div>
        </div>
        <div className="skillEduDiv">
          <div className={"skill " + (btnState && "active")}>
            <div className="skillDiv1">
              <div className="skillBox html">
                <i class="fa-brands fa-html5"></i>
                <span>HTML</span>
              </div>
              <div className="skillBox css">
                <i class="fa-brands fa-css3"></i> <span>CSS</span>
              </div>
              <div className="skillBox js">
                <i class="fa-brands fa-square-js"></i>
                <span>Javascript</span>
              </div>
              <div className="skillBox rjs">
                <i class="fa-brands fa-react"></i>
                <span>React JS</span>
            </div>
            <div className="skillDiv2">
              <div className="skillBox cpp">
                <i class="fa-solid fa-code"></i>
                <span>C++</span>
              </div>
              <div className="skillBox java">
                <i class="fa-brands fa-java"></i>
                <span>Java</span>
              </div>
              <div className="skillBox dsa">
                <i class="fa-solid fa-dice"></i>
                <span>DSA</span>
              </div>
            </div>
          </div>
          <div className={"edu " + (btnState && "active")}>
            <div className="high">
              <div className="desc">
                <div className="cllg">
                  <h4>Secondary</h4>
                  <p>Adarsh Vikas Vidyalaya</p>
                </div>
                <div className="year">2017</div>
              </div>
              <div className="icon">
                <i class="fa-solid fa-school"></i>
              </div>
            </div>
            <div className="high inter">
              <div className="desc">
                <div className="cllg">
                  <h4>Higher Secondary</h4>
                  <p>Park Mount Public School</p>
                </div>
                <div className="year">2019</div>
              </div>
              <div className="icon">
                <i class="fa-solid fa-school-flag"></i>
              </div>
            </div>
            <div className="high inter">
              <div className="desc">
                <div className="cllg">
                  <h4>B-Tech</h4>
                  <p>Lovely Professional University</p>
                </div>
                <div className="year">2024</div>
              </div>
              <div className="icon">
                <i class="fa-solid fa-school-flag"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
