import React, { useState, useEffect } from "react";

import logo from "../img/logo.png";
import avatar from "../img/avatar.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav-dark"}`}>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <img src={avatar} alt="User Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
