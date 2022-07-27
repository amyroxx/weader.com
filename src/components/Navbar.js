import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="nav">
        <div className="logo">
          <div className="logo-main">Weader.com</div>
        </div>
        <div className="navigation">
          <div className="navbar">
            <ul>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/about">About me</Link>
              </li>
              <li>
                {" "}
                <Link to="/social">Social</Link>
              </li>
              <li>
                {" "}
                <Link to="/forecast">Forecast</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ham">
          <div className="icon">
            <a href="">
              <div className="burger"></div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
