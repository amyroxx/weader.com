import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
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
        <IconContext.Provider value={{ color: "#fff" }} >
          <div className="naver">
          <div className="navbar1" id="popout">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div></div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiFillCaretRight  />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="nav-text">
              <a  href="https://github.com/amyroxx/weader.com" target="_blank" rel="noreferrer"><AiIcons.AiFillCode/><span>SourceCode</span></a>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
        <div className="ham">
          <div className="icon menu-bars">
            <a  href="https://github.com/amyroxx/weader.com" target="_blank" rel="noreferrer"><AiIcons.AiFillCode/></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
