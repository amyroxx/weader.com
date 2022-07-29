import React from "react";
import Weather from "./Weather";
import About from "./About";
import Social from "./Social";
import { Routes, Route, useLocation } from "react-router-dom";
import Forecast from "./Forecast";

import { AnimatePresence } from "framer-motion";

const Animatedroutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="/social" element={<Social />} />
          <Route path="/Forecast" element={<Forecast />} /> 
           
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Animatedroutes;
