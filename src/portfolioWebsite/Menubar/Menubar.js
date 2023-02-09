import React, { useEffect, useState } from "react";
import "./Menubar.css";
import "./MenubarStyle.css";
import { Link } from "react-router-dom";

function Menubar() {
  const [home, setHome] = useState("home");
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="menubar" id="menubar">
      <nav className="navContainer">
        <ul>
          <Link
            to="/"
            onClick={() => setHome("home")}
            className={"link " + (home === "home" && "activeMenu")}
          >
            <i class="fa-solid fa-house"></i>
            <p>Home</p>
          </Link>
          <Link
            to="/about"
            onClick={() => setHome("about")}
            className={"link " + (home === "about" && "activeMenu")}
          >
            <i class="fa-solid fa-user"></i>
            <p>About</p>
          </Link>
          <Link
            to="/certificate"
            onClick={() => setHome("certificate")}
            className={"link " + (home === "certificate" && "activeMenu")}
          >
            <i class="fa-solid fa-trophy"></i>
            <p>Certificate</p>
          </Link>
          <Link
            to="/contact"
            onClick={() => setHome("contact")}
            className={"link " + (home === "contact" && "activeMenu")}
          >
            <i class="fa-solid fa-address-book"></i>
            <p>Contact</p>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Menubar;
